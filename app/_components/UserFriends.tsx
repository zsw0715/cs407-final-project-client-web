"use client";

import Image from "next/image";
import { ContactRound, MessageCircle } from "lucide-react";

const DUMMY_FRIEND_REQUESTS = [
  {
    id: 0,
    name: "P(x, y)",
    avatar_url: "/images/user_avatar_0.png",
    gender: "female"
  },
  {
    id: 1,
    name: "Boxiang Zhang",
    avatar_url: "/images/user_avatar_1.png",
    gender: "female"
  },
  {
    id: 2,
    name: "Sipei",
    avatar_url: "/images/user_avatar_2.png",
    gender: "male"
  },
  {
    id: 3,
    name: "Minyuan",
    avatar_url: "/images/user_avatar_3.png",
    gender: "male"
  },
  {
    id: 4,
    name: "Shiya Su",
    avatar_url: "/images/user_avatar_4.png",
    gender: "female"
  },
  {
    id: 5,
    name: "Feibo Wang",
    avatar_url: "/images/user_avatar_5.png",
    gender: "male"
  },
  {
    id: 6,
    name: "Tony Wei",
    avatar_url: "/images/user_avatar_6.png",
    gender: "female"
  },
  {
    id: 7,
    name: "Bochen Jiang",
    avatar_url: "/images/user_avatar_7.png",
    gender: "male"
  },
  {
    id: 8,
    name: "Enhui Zhao",
    avatar_url: "/images/user_avatar_8.png",
    gender: "female"
  },
  {
    id: 9,
    name: "Fuli Ye",
    avatar_url: "/images/user_avatar_9.png",
    gender: "male"
  },
  {
    id: 10,
    name: "Runyu Zhang",
    avatar_url: "/images/user_avatar_10.png",
    gender: "female"
  },
  {
    id: 11,
    name: "ZSW",
    avatar_url: "/images/user_avatar_11.png",
    gender: "male"
  },
  {
    id: 12,
    name: "Boyuan Wang",
    avatar_url: "/images/user_avatar_12.png",
    gender: "female"
  },
  {
    id: 13,
    name: "Tianyuan Ru",
    avatar_url: "/images/user_avatar_13.png",
    gender: "male"
  }
];

export default function UserFriends() {
  return (
    <div
      className="relative"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #d1d5db',
        borderColor: 'rgba(209, 213, 219, 0.5)',
        borderRadius: '32px',
        padding: '4px',
        marginBottom: '10px',
        marginTop: '16px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}>
      <div className="absolute flex items-center left-1.5 -top-3 px-3 py-0.5 rounded-2xl bg-amber-50 border border-gray-200 shadow-sm">
        <ContactRound size={17} style={{ color: '#a16207', verticalAlign: 'middle' }} />
        <span className="text-sm font-medium ml-2" style={{ color: '#a16207', verticalAlign: 'middle' }}>Friends</span>
      </div>
      <div style={{ marginTop: '16px' }}>
        {DUMMY_FRIEND_REQUESTS.map((request) => (
          <div 
            key={request.id} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '8px 8px',
              backdropFilter: 'blur(16px)',
              border: '1px solid #e5e7eb',
              borderRadius: '28px',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              marginTop: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={request.avatar_url}
                alt={request.name}
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
              <div style={{ flex: 1, marginLeft: '16px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '500', color: '#1f2937', margin: 0 }}>{request.name}</h4>
              </div>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  width: '36px',
                  height: '36px'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#2563eb'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#3b82f6'}
                onClick={() => console.log(`Send message to ${request.name}`)}
              >
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}