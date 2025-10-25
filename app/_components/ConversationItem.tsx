"use client";

import "@/app/_style/general.css";
import { useSidebar } from "../_context/SidebarContext";

interface ConversationItemProps {
  conversation: {
    conv_id: number;
    conv_type: string;
    last_msg_text: string;
    title?: string;
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
  const { participants, last_msg_text, updated_at } = conversation;
  const { isExpanded, selectedConversationId, setSelectedConversationId } = useSidebar();
  
  // 判断是否应该展开 (与 RightSidebar 中的逻辑保持一致)
  const shouldExpand = isExpanded || selectedConversationId !== null;
  
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

  const handleClick = () => {
    // 如果点击的是已选中的会话，则取消选择
    if (selectedConversationId === conversation.conv_id) {
      setSelectedConversationId(null);
    } else {
      // 如果点击的是不同的会话，则切换到新的会话
      setSelectedConversationId(conversation.conv_id);
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className="animate-level-reveal-0"
      style={{
        backgroundColor: selectedConversationId === conversation.conv_id 
          ? 'rgba(99, 102, 241, 0.25)' 
          : 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        border: selectedConversationId === conversation.conv_id 
          ? '2px solid rgba(99, 102, 241, 0.5)' 
          : '1px solid #d1d5db',
        borderColor: selectedConversationId === conversation.conv_id 
          ? 'rgba(99, 102, 241, 0.5)' 
          : 'rgba(209, 213, 219, 0.5)',
        borderRadius: '32px',
        padding: '9px',
        marginBottom: '10px',
        boxShadow: selectedConversationId === conversation.conv_id 
          ? '0 4px 12px 0 rgba(99, 102, 241, 0.15)' 
          : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        marginTop: index === 0 ? '60px' : '0px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        marginRight: shouldExpand ? '18px' : '0px',
      }}
      onClick={handleClick}
      onMouseEnter={(e) => {
        if (selectedConversationId !== conversation.conv_id) {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
        }
        e.currentTarget.style.transform = 'translateY(-1px)';
      }}
      onMouseLeave={(e) => {
        if (selectedConversationId === conversation.conv_id) {
          e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.25)';
        } else {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
        }
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
          {conversation.conv_type === 'group' ? (
            // 群组4宫格头像
            <div style={{
              width: '48px',
              height: '48px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: '1fr 1fr',
              gap: '1px',
              borderRadius: '15px',
              overflow: 'hidden',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              {participants.slice(0, 4).map((participant, idx) => (
                <img
                  key={participant.user_id}
                  src={participant.avatar_url || '/images/default-avatar.png'}
                  alt={participant.username || '未知用户'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              ))}
              {/* 如果参与者少于4个，用空白占位 */}
              {Array.from({ length: Math.max(0, 4 - participants.length) }).map((_, idx) => (
                <div
                  key={`empty-${idx}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(209, 213, 219, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '10px',
                    color: '#9ca3af'
                  }}
                >
                  +
                </div>
              ))}
            </div>
          ) : (
            // 单人头像
            <img
              src={conversation.participants[0]?.avatar_url || '/images/default-avatar.png'}
              alt={conversation.participants[0]?.username || '未知用户'}
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255, 255, 255, 0.3)'
              }}
            />
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
              {conversation.conv_type === 'group'
                ? (conversation.title || 'Group Chat')
                : conversation.participants[0]?.username || 'Unknown User'}
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

