"use client";

import { Mars, Venus } from "lucide-react";

interface GenderIndicatorProps {
  gender: "male" | "female";
}

export default function GenderIndicator({ gender }: GenderIndicatorProps) {
  return (
    <div className={`absolute top-0 right-0 mt-2 mr-2 rounded-full py-1 px-3 shadow-sm rotate-24 ${gender === "male" ? 'bg-blue-100' : 'bg-pink-100'}`}>
      {gender === "male" ? (
        <Mars
          size={20}
          style={{
            color: '#3b82f6',
            zIndex: 10,
            rotate: '-16deg',
            filter: 'drop-shadow(0 2px 4px rgba(59, 130, 246, 0.2))'
          }}
        />
      ) : (
        <Venus
          size={20}
          style={{
            color: '#ec4899',
            zIndex: 10,
            rotate: '-16deg',
            filter: 'drop-shadow(0 2px 4px rgba(236, 72, 153, 0.2))'
          }}
        />
      )}
    </div>
  );
}
