"use client";

import Image from "next/image";
import { Map, MessageCircle } from "lucide-react";
import { useState } from "react";

type TabType = 'map' | 'message' | 'profile';

export default function FooterNav() {
    const [activeTab, setActiveTab] = useState<TabType>('map');

    const getSliderPosition = () => {
        switch (activeTab) {
            case 'map': return '0%';
            case 'message': return '100%';
            case 'profile': return '203%';
            default: return '0%';
        }
    };

    return (
        <div className="absolute left-8 bottom-7 border border-gray-200 bg-opacity-70 backdrop-blur-md px-1 py-1 rounded-full shadow-lg text-sm font-medium transition-colors cursor-pointer flex">
            {/* 滑块背景 */}
            <div
                className="absolute bg-white backdrop-blur-2xl opacity-60 border rounded-full shadow-lg"
                style={{
                    width: 'calc(33.333% - 4px)',
                    height: 'calc(100% - 8px)',
                    top: '4px',
                    left: '4px',
                    boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)',
                    transform: `translateX(${getSliderPosition()}) scale(1.02)`,
                    transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
                    border: '1px solid rgba(59, 130, 246, 0.15)',
                }}
            />
            {/* Map控制 */}
            <div
                className={`flex items-center justify-center rounded-full px-4 py-2 relative z-10 transition-colors duration-200 ${activeTab === 'map' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('map')}
            >
                <Map className="inline-block w-6 h-6" />
            </div>

            {/* Message控制 */}
            <div
                className={`flex items-center justify-center rounded-full px-4 py-2 relative z-10 transition-colors duration-200 ${activeTab === 'message' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('message')}
            >
                <MessageCircle className="inline-block w-6 h-6" />
            </div>

            {/* Profile控制 */}
            <div
                className={`relative flex items-center justify-center rounded-full px-4 z-10 transition-all duration-300 ${activeTab === 'profile' ? 'scale-110' : 'scale-100'}`}
                onClick={() => setActiveTab('profile')}
            >
                <div className={`absolute rounded-full transition-all duration-300 w-[33px] h-[33px] ${activeTab !== 'profile' && 'border-2 border-gray-300'}`} />
                <Image
                    src="/images/user_avatar.png"
                    alt="User Avatar"
                    width={30}
                    height={30}
                    className="rounded-full"
                />
            </div>
        </div>
    );
}
