"use client";

import { useState } from "react";
import { useActiveTab } from "../_context/ActiveTabContext";
import { Search } from "lucide-react";

export default function RightSidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { activeTab } = useActiveTab();

  const getTabDisplayName = () => {
    switch (activeTab) {
      case "map":
        return "Postings";
      case "message":
        return "Knot Chat";
      case "profile":
        return "User";
      default:
        return "Unknown";
    }
  };

  return (
    <div
      className="absolute right-0 top-0 h-[calc(100%-1rem)] border border-gray-200 m-2 shadow-lg"
      style={{
        width: isExpanded ? "888px" : "312px",
        padding: isExpanded ? "24px" : "13px",
        backgroundColor: isExpanded
          ? "rgba(255, 255, 255, 0.55)"
          : "rgba(255, 255, 255, 0.25)",
        backdropFilter: isExpanded ? "blur(20px)" : "blur(12px)",
        borderRadius: isExpanded ? "45px" : "42px",
        transition: "all 0.6s cubic-bezier(0.34, 1.28, 0.64, 1)",
        transform: isExpanded
          ? "scale(1.01) rotateY(-1deg)"
          : "scale(1) rotateY(1.5deg)",
      }}
    >
      {/* 毛玻璃底层叠加层 */}
      <div
        className="absolute inset-0 rounded-[45px] z-0"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))",
          backdropFilter: isExpanded ? "blur(22px)" : "blur(12px)",
          zIndex: 0,
        }}
      />
      {/* 内容层 */}
      <div className="relative z-10 h-full w-full p-6 text-gray-900 font-medium overflow-y-auto flex flex-col">
        <div className="flex-1" style={{ fontSize: '24px' }}>
          {/* 当前选中标签页 */}
          <p className="text-gray-600 leading-relaxed" style={{ padding: '8px' }}>
            <span className="font-semibold">{getTabDisplayName()}</span>
          </p>
          {/* main content */}
          <div className="leading-relaxed">
            Main content
          </div>
        </div>
        {/* search input 固定在底部 */}
        <div 
          className="mt-auto" 
          style={{ 
            position: "relative",
            transform: activeTab === "profile" ? "translateY(150%) scale(0.9)" : "translateY(0%)",
            transition: "transform 0.5s cubic-bezier(0.34, 1.58, 0.64, 1)"
          }}
        >
          <Search 
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "16px",
              height: "16px",
              color: "#9ca3af",
              zIndex: 10,
            }}
          />
          <input
            type="text"
            placeholder={`Search for ${getTabDisplayName()}`}
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
            onFocus={(e) => {
              e.target.style.borderColor = "#6366f1";
              e.target.style.boxShadow = "0 0 0 2px rgba(99, 102, 241, 0.15)";
              e.target.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
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
    </div>
  );
}
