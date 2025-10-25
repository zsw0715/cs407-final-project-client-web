"use client";

import { useState, useRef, useEffect } from "react";
import { useActiveTab } from "../_context/ActiveTabContext";
import { Search } from "lucide-react";
import PostCard from "./PostCard";
import "@/app/_style/general.css";

/**
 * mock data for posts
 */
const mockPosts = [
  {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  },
    {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  },
    {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  },
    {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  }
];

export default function RightSidebar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { activeTab } = useActiveTab();

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollTop = scrollRef.current.scrollTop;
        setIsScrolled(scrollTop > 20);
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

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

  const getScrollLeftOffset = () => {
    switch (activeTab) {
      case "map": return '-145px';
      case "message": return '-155px';
      case "profile": return '-105px';
      default: return '-120px';
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
      <div className="relative z-10 h-full w-full text-gray-900 font-medium overflow-y-auto flex flex-col">
        <div className="flex-1 " style={{ fontSize: '24px', position: 'relative' }}>
          {/* 当前选中标签页 */}
          <p 
            className="absolute top-0 text-gray-600 leading-relaxed" 
            style={{ 
              padding: isScrolled ? '8px 18px' : '8px',
              left: isScrolled ? getScrollLeftOffset() : '0px',
              transition: 'all 0.5s cubic-bezier(0.34, 1.58, 0.64, 1)',
              backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
              borderRadius: '30px',
              scale: isScrolled ? 0.75 : 1,
            }}
          >
            <span className="font-semibold">{getTabDisplayName()}</span>
          </p>
          {/* main content */}
          <div 
            ref={scrollRef}
            className="leading-relaxed"
            style={{ 
              overflowY: 'auto',
              height: 'calc(100vh - 165px)',
              borderRadius: '24px',
              paddingBottom: '150px',
            }}>
            {mockPosts.map((post, index) => (
              <PostCard key={index} title={post.title} summary={post.summary} index={index} />
            ))}
          </div>
        </div>
        {/* search input 固定在底部 */}
        <div 
          style={{ 
            position: "absolute",
            bottom: "1px",
            left: "3px",
            width: "calc(100% - 6px)",
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
