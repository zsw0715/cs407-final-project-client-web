"use client";

import { Key, Search, User } from "lucide-react";
import { useState } from "react";

interface LoginOverlayProps {
  showOverlay: boolean;
  setShowOverlay: (show: boolean) => void;
}

export default function LoginOverlay({ showOverlay, setShowOverlay }: LoginOverlayProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  const getSliderPosition = () => {
    switch (activeTab) {
      case 'login': return '0%';
      case 'register': return '100%';
      default: return '0%';
    }
  };

  const handleSubmit = () => {
    if (activeTab === 'login') {
      // Handle login logic
      console.log('Logging in with', { username, password });
    } else {
      // Handle register logic
      console.log('Registering with', { username, password });
    }

    // For demo purposes, just close the overlay
    setShowOverlay(false);
  }

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-700 ease-out ${showOverlay ? 'opacity-100' : 'opacity-0'
        }`}
    >
      <div
        className="bg-[#F8F4EE] relative backdrop-blur-sm shadow-lg transition-all duration-300"
        style={{
          borderRadius: "46px",
          padding: "26px 26px 26px 26px",
          width: "405px",
          border: "2px solid rgba(222, 184, 135, 0.3)",
          // height: "400px",
        }}>
        <p
          className="absolute mt-1 text-sm text-gray-600 bg-amber-300 px-3 py-0.5 rounded-2xl"
          style={{
            rotate: "25deg",
            top: "-0px",
            right: "-50px",
          }}>
          CS407 Project Demo
        </p>
        <h2 className="text-2xl text-gray-500 font-bold">
          Knot - {activeTab === 'login' ? 'Login' : 'Register'}
        </h2>
        {/* login logic */}
        <div style={{ marginTop: "14px" }}>
          <div
            style={{
              position: "relative",
              marginTop: "22px",
            }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <User
              style={{
                position: "absolute",
                left: "16px",
                top: "49px",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
                color: "#9ca3af",
                zIndex: 10,
              }}
            />
            <input
              type="text"
              placeholder={`username`}
              style={{
                width: "100%",
                padding: "10px 18px 10px 44px",
                border: "1px solid rgba(203, 213, 225, 0.6)",
                borderRadius: "9999px",
                backgroundColor: "rgba(248, 250, 252, 0.15)",
                backdropFilter: "blur(8px)",
                color: "#1e293b",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.25s ease-in-out",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={(e) => {
                e.target.style.borderColor = "#6366f1";
                e.target.style.boxShadow = "0 0 0 2px rgba(99, 102, 241, 0.15)";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                e.target.style.backdropFilter = "blur(12px)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(203, 213, 225, 0.6)";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "rgba(248, 250, 252, 0.15)";
                e.target.style.backdropFilter = "blur(8px)";
              }}
            />
          </div>
          <div
            className="mt-3 "
            style={{
              position: "relative",
            }}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <Key
              style={{
                position: "absolute",
                left: "16px",
                top: "49px",
                transform: "translateY(-50%)",
                width: "16px",
                height: "16px",
                color: "#9ca3af",
                zIndex: 10,
              }}
            />
            <input
              type="text"
              placeholder={`password`}
              style={{
                width: "100%",
                padding: "10px 18px 10px 44px",
                border: "1px solid rgba(203, 213, 225, 0.6)",
                borderRadius: "9999px",
                backgroundColor: "rgba(248, 250, 252, 0.15)",
                backdropFilter: "blur(8px)",
                color: "#1e293b",
                fontSize: "14px",
                outline: "none",
                transition: "all 0.25s ease-in-out",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => {
                e.target.style.borderColor = "#6366f1";
                e.target.style.boxShadow = "0 0 0 2px rgba(99, 102, 241, 0.15)";
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
                e.target.style.backdropFilter = "blur(12px)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(203, 213, 225, 0.6)";
                e.target.style.boxShadow = "none";
                e.target.style.backgroundColor = "rgba(248, 250, 252, 0.15)";
                e.target.style.backdropFilter = "blur(8px)";
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* 滑块背景 */}
          <div
            className="relative bg-white backdrop-blur-2xl opacity-60 border rounded-full shadow-lg"
            style={{
              width: '207px',
              height: '38px',
              marginTop: '24px',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.15)',
            }}
          >
            {/* 滑动指示器 */}
            <div
              className="absolute bg-blue-500 rounded-full shadow-lg"
              style={{
                width: '100px',
                height: '32px',
                top: '2px',
                left: '2px',
                transform: `translateX(${getSliderPosition()})`,
                transition: 'all 0.5s cubic-bezier(0.34, 1.34, 0.64, 1)',
                background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)',
              }}
            />

            {/* Tab 按钮 */}
            <div className="absolute inset-0 flex">
              <button
                className={`flex-1 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'login' ? 'text-white' : 'text-gray-600'
                  }`}
                onClick={() => setActiveTab('login')}
                style={{
                  zIndex: 10,
                }}
              >
                Login
              </button>
              <button
                className={`flex-1 text-sm font-medium rounded-full transition-colors duration-300 ${activeTab === 'register' ? 'text-white' : 'text-gray-600'
                  }`}
                onClick={() => setActiveTab('register')}
                style={{
                  zIndex: 10,
                }}
              >
                Register
              </button>
            </div>
          </div>
          {/* submit button */}
          <div style={{ marginTop: "24px", width: "100px" }}>
            <button
              className="w-full text-white rounded-full shadow-md transition duration-200"
              style={{
                padding: "7px 0",
                background: "linear-gradient(135deg, #f8a5c2 0%, #f063a4 100%)",
                boxShadow: "0 4px 15px rgba(240, 99, 164, 0.3)",
                cursor: "pointer",
              }}
              onClick={handleSubmit}
            >
              {activeTab === 'login' ? 'Login' : 'Register'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
