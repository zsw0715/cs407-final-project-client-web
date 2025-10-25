"use client";

import "@/app/_style/general.css";
import { Heart, Forward } from "lucide-react";

interface PostCardProps {
  username: string;
  avatar_url: string;
  content_text: string;
  media_urls: string[];
  loc_lat: number;
  loc_lng: number;
  loc_name: string;
  created_at: string;
  index: number;
  // 点赞相关props
  isLiked?: boolean;
  likeCount?: number;
  likedAvatars?: string[]; // 点赞用户的头像数组
  onLike?: () => void;
  // 转发相关props
  onShare?: () => void;
}

export default function PostCard({
  username,
  avatar_url,
  content_text,
  media_urls,
  loc_lat,
  loc_lng,
  loc_name,
  created_at,
  index,
  isLiked = false,
  likeCount = 0,
  likedAvatars = [],
  onLike,
  onShare
}: PostCardProps) {
  return (
    <div
      className="animate-level-reveal"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #d1d5db',
        borderColor: 'rgba(209, 213, 219, 0.5)',
        borderRadius: '32px',
        padding: '14px',
        marginBottom: '10px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        marginTop: index === 0 ? '60px' : '0px',
      }}>
      {/* User header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '12px'
      }}>
        <img
          src={avatar_url}
          alt={username}
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            marginRight: '12px'
          }}
        />
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            margin: '0',
            color: '#1f2937'
          }}>{username}</h3>
          <p style={{
            fontSize: '12px',
            color: '#6b7280',
            margin: '0'
          }}>{created_at}</p>
        </div>
        
        {/* Share button */}
        <button
          onClick={onShare}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // transition: 'background-color 0.2s'
          }}
        >
          <Forward 
            size={16} 
            stroke="#6b7280"
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Content */}
      <p style={{
        color: '#1f2937',
        fontSize: '14px',
        lineHeight: '1.5',
        marginBottom: '12px'
      }}>{content_text}</p>

      {/* Location and Like section in one row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Location */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          color: '#6b7280',
          fontSize: '12px'
        }}>
          <span style={{ marginRight: '4px' }}>📍</span>
          <span>{loc_name}</span>
        </div>

        {/* Like section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          {/* Heart icon */}
          <button
            onClick={onLike}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '2px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
          >
            <Heart
              size={18}
              fill={isLiked ? '#ef4444' : 'none'}
              stroke={isLiked ? '#ef4444' : '#6b7280'}
              strokeWidth={2}
            />
          </button>

          {/* Liked avatars */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '-2px',
            marginLeft: '2px'
          }}>
            {likedAvatars.slice(0, 3).map((avatarUrl, index) => (
              <img
                key={index}
                src={avatarUrl || `https://via.placeholder.com/24x24?text=${index + 1}`}
                alt={`Liked by user ${index + 1}`}
                style={{
                  width: index === 0 ? '24px' : '20px',
                  height: index === 0 ? '24px' : '20px',
                  borderRadius: '50%',
                  border: '1px solid white',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                  marginLeft: index > 0 ? '-4px' : '0'
                }}
              />
            ))}
            {likeCount > 3 && (
              <span style={{
                fontSize: '12px',
                color: '#6b7280',
                marginLeft: '4px'
              }}>
                +{likeCount - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
