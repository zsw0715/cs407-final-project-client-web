"use client";

import "@/app/_style/general.css";

interface ConversationItemProps {
  conversation: {
    conv_id: number;
    conv_type: string;
    last_msg_text: string;
    participants: {
      user_id: number;
      username: string;
      avatar_url: string;
    }[];
    created_at: string;
    updated_at: string;
  };
  index?: number;
  onClick?: () => void;
}

export default function ConversationItem({ conversation, index, onClick }: ConversationItemProps) {
  const { participants, last_msg_text, updated_at, conv_type } = conversation;
  
  // 格式化时间显示
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 1) {
      return '刚刚';
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}小时前`;
    } else if (diffInHours < 168) { // 7天
      return `${Math.floor(diffInHours / 24)}天前`;
    } else {
      return date.toLocaleDateString('zh-CN', { month: 'numeric', day: 'numeric' });
    }
  };

  // 获取显示的用户信息（群聊显示多个用户，私聊显示对方）
  const getDisplayInfo = () => {
    if (conv_type === 'group') {
      return {
        name: `群聊 (${participants.length}人)`,
        avatar: participants[0]?.avatar_url || '/images/default-avatar.png',
        isGroup: true
      };
    } else {
      // 私聊显示对方信息
      const otherUser = participants[0]; // 假设第一个是对方
      return {
        name: otherUser?.username || '未知用户',
        avatar: otherUser?.avatar_url || '/images/default-avatar.png',
        isGroup: false
      };
    }
  };

  const displayInfo = getDisplayInfo();

  return (
    <div
      className="animate-level-reveal"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #d1d5db',
        borderColor: 'rgba(209, 213, 219, 0.5)',
        borderRadius: '32px',
        padding: '9px',
        marginBottom: '10px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        marginTop: index === 0 ? '60px' : '0px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {/* 头像部分 */}
        <div style={{ position: 'relative' }}>
          <img
            src={displayInfo.avatar}
            alt={displayInfo.name}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
          />
          {/* 群聊标识 */}
          {displayInfo.isGroup && (
            <div style={{
              position: 'absolute',
              bottom: '-2px',
              right: '-2px',
              width: '16px',
              height: '16px',
              backgroundColor: '#10b981',
              borderRadius: '50%',
              border: '2px solid white',
              fontSize: '8px',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold'
            }}>
              {participants.length}
            </div>
          )}
        </div>

        {/* 会话信息 */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '4px'
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '600',
              margin: '0',
              color: '#1f2937',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {displayInfo.name}
            </h3>
            <span style={{
              fontSize: '12px',
              color: '#6b7280',
              flexShrink: 0,
              marginRight: '12px'
            }}>
              {formatTime(updated_at)}
            </span>
          </div>
          
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: '0',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            lineHeight: '1.4'
          }}>
            {last_msg_text || '暂无消息'}
          </p>
        </div>
      </div>
    </div>
  );
}

