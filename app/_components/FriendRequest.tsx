"use client";

import Image from "next/image";
import { UserPlus, ContactRound } from "lucide-react";

const DUMMY_FRIEND_REQUESTS = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar_url: "/images/user_avatar_2.png",
    gender: "male"
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar_url: "/images/user_avatar_3.png",
    gender: "female"
  },
];

export default function FriendRequest() {
  return (
    <div
      className="animate-level-reveal relative"
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
        <UserPlus size={17} style={{ color: '#a16207', verticalAlign: 'middle' }} />
        <span className="text-sm font-medium ml-2" style={{ color: '#a16207', verticalAlign: 'middle' }}>Friend Requests</span>
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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
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
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  padding: '6px 16px',
                  backgroundColor: '#dcfce7',
                  color: '#15803d',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  width: '100%'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#bbf7d0'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#dcfce7'}
              >
                <ContactRound size={16} style={{ marginRight: '6px' }} />
                Accept
              </button>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  padding: '6px 16px',
                  backgroundColor: '#fee2e2',
                  color: '#dc2626',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                  width: '100%'
                }}
                onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#fecaca'}
                onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = '#fee2e2'}
              >
                <ContactRound size={16} style={{ marginRight: '6px' }} />
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}