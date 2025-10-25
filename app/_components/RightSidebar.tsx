"use client";

import { useState } from "react";

export default function RightSidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div
      className={`absolute right-0 top-0 h-[calc(100%-1rem)] border border-gray-200 p-4 m-2 shadow-lg`}
      style={{
        width: isExpanded ? '888px' : '312px',
        backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.2)',
        backdropFilter: isExpanded ? 'blur(18px)' : 'blur(12px)',
        borderRadius: isExpanded ? '45px' : '42px',
        transition: 'all 0.5s cubic-bezier(0.34, 1.24, 0.64, 1)',
        transform: isExpanded ? 'scale(1.01) rotateY(-1deg)' : 'scale(1) rotateY(2deg)',
      }}
    >
      <button
        className={`text-sm text-gray-600 hover:text-gray-800 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          transform: isExpanded ? 'translateX(0) scale(1)' : 'translateX(-10px) scale(0.8)',
          transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
      >
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
    </div>
  );
}
