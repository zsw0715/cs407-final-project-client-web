"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { login, register, logout, refreshToken } from "../_api/auth";

interface AuthContextType {
  uid: number | null;
  at: string | null;
  rt: string | null;
  username: string | null;
  isLoading: boolean;
  loginUser: (username: string, password: string) => Promise<void>;
  registerUser: (username: string, password: string) => Promise<void>;
  logoutUser: () => Promise<void>;
  refreshAccessToken: () => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | null>(null);
export const useAuth = () => useContext(AuthContext)!;

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [uid, setUid] = useState<number | null>(null);
  const [at, setAt] = useState<string | null>(null);
  const [rt, setRt] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 本地存储键
  const storeKey = "knot_auth";

  /** 从 localStorage 加载 */
  useEffect(() => {
    const saved = localStorage.getItem(storeKey);
    if (saved) {
      try {
        const obj = JSON.parse(saved);
        setAt(obj.at);
        setRt(obj.rt);
        setUid(obj.uid);
        setUsername(obj.username);
      } catch {
        console.error("Failed to parse saved auth");
      }
    }
  }, []);

  /** 保存到 localStorage */
  const saveAuth = (data: any) => {
    localStorage.setItem(storeKey, JSON.stringify(data));
  };

  /** 注册 */
  const registerUser = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      await register(username, password);
      console.log("REGISTER OK");
    } catch (e: any) {
      console.error("REGISTER ERR:", e.message);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  /** 登录 */
  const loginUser = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const d = await login(username, password);
      const access = d.accessToken || d.token;
      const refresh = d.refreshToken;
      const id = d.userId ?? d.uid ?? null;
      setAt(access || null);
      setRt(refresh || null);
      setUid(id);
      setUsername(username);
      saveAuth({ at: access, rt: refresh, uid: id, username });
      console.log("LOGIN OK");
    } catch (e: any) {
      console.error("LOGIN ERR:", e.message);
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  /** 登出 */
  const logoutUser = async () => {
    setIsLoading(true);
    try {
      if (username) await logout(username);
    } catch (e: any) {
      console.warn("LOGOUT WARN:", e.message);
    } finally {
      setAt(null);
      setRt(null);
      setUid(null);
      setUsername(null);
      localStorage.removeItem(storeKey);
      setIsLoading(false);
    }
  };

  /** 刷新 token（如果 RT 有效） */
  const refreshAccessToken = async (): Promise<boolean> => {
    if (!rt) return false;
    try {
      const data = await refreshToken(rt);
      const access = data.accessToken || data.token;
      if (access) {
        setAt(access);
        saveAuth({ at: access, rt, uid, username });
        return true;
      }
      return false;
    } catch (e: any) {
      console.error("REFRESH ERR:", e.message);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        uid,
        at,
        rt,
        username,
        isLoading,
        loginUser,
        registerUser,
        logoutUser,
        refreshAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
