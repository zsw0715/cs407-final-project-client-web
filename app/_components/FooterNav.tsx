"use client";

import Image from "next/image";
import { Map, MessageCircle } from "lucide-react";

export default function FooterNav() {
    return (
        <div className="absolute flex left-8 bottom-7 border border-gray-200 backdrop-blur-md px-1 py-1 rounded-full shadow-lg text-sm font-medium transition-colors cursor-pointer">
            {/* map controls */}
            <div className="flex items-center justify-center rounded-full pr-4 pl-5 py-2">
                <Map className="inline-block w-6 h-6 text-gray-600" />
            </div>
            {/* map controls */}
            <div className="flex items-center justify-center rounded-full px-4 py-2">
                <MessageCircle className="inline-block w-6 h-6 text-gray-600" />
            </div>
            {/* map controls */}
            <div className="flex items-center justify-center rounded-full pl-3 pr-4">
                <div className="border-2 rounded-full border-gray-300">
                    <Image
                        src="/images/user_avatar.png"
                        alt="User Avatar"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                </div>
            </div>
        </div>
    );
}
