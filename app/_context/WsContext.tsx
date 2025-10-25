"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "./AuthContext";

interface WsContextType {
  ws: WebSocket | null;
  sendMsg: (msg: any) => void;
  isConnected: boolean;
  lastMsg: any | null;
}

const WsContext = createContext<WsContextType | null>(null);
export const useWs = () => useContext(WsContext)!;

export function WsProvider({ children }: { children: React.ReactNode }) {
  const { at, uid } = useAuth();
  const [isConnected, setIsConnected] = useState(false);
  const [lastMsg, setLastMsg] = useState<any | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const hbTimer = useRef<NodeJS.Timeout | null>(null);
  const reconnectTimer = useRef<NodeJS.Timeout | null>(null);

  const WS_URL = "ws://localhost:10827/ws"; // 修改为你的后端地址

  /** 建立 WebSocket 连接 */
  const connectWs = () => {
    if (!at) {
      console.log("No token yet, WS not started");
      return;
    }

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      console.log("WS already connected");
      return;
    }

    console.log("Connecting WebSocket to", WS_URL);
    const ws = new WebSocket(WS_URL);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("✅ WS connected");
      setIsConnected(true);
      ws.send(JSON.stringify({ type: "AUTH", token: at }));
      startHeartbeat();
    };

    ws.onmessage = (ev) => {
      try {
        const msg = JSON.parse(ev.data);
        console.log("<< WS:", msg);
        setLastMsg(msg);
        if (msg.type === "AUTH_OK") {
          console.log(`🔐 AUTH OK, uid=${msg.uid}`);
        } else if (msg.type === "HEARTBEAT_ACK") {
          console.log("💓 Heartbeat ACK", msg);
        }
      } catch {
        console.warn("Non-JSON message:", ev.data);
      }
    };

    ws.onclose = (e) => {
      console.warn(`⚠️ WS closed (code=${e.code}), reason=${e.reason}`);
      setIsConnected(false);
      stopHeartbeat();

      // 自动重连
      if (!reconnectTimer.current) {
        reconnectTimer.current = setTimeout(() => {
          reconnectTimer.current = null;
          console.log("🔄 Reconnecting WS...");
          connectWs();
        }, 3000);
      }
    };

    ws.onerror = (err) => {
      console.error("WS error:", err);
      ws.close();
    };
  };

  /** 心跳 */
  const startHeartbeat = () => {
    stopHeartbeat();
    hbTimer.current = setInterval(() => {
      if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify({ type: "HEARTBEAT" }));
        console.log(">> HEARTBEAT");
      }
    }, 30000); // 30s
  };

  const stopHeartbeat = () => {
    if (hbTimer.current) clearInterval(hbTimer.current);
    hbTimer.current = null;
  };

  /** 发送消息 */
  const sendMsg = (msg: any) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(msg));
      console.log(">> WS:", msg);
    } else {
      console.warn("WS not connected, message skipped");
    }
  };

  /** 自动连接（当 AT 更新） */
  useEffect(() => {
    if (at) connectWs();
    return () => {
      if (wsRef.current) wsRef.current.close(1000, "Unmount");
      stopHeartbeat();
    };
  }, [at]);

  return (
    <WsContext.Provider value={{ ws: wsRef.current, sendMsg, isConnected, lastMsg }}>
      {children}
    </WsContext.Provider>
  );
}