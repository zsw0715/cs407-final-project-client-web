"use client";

import { useSidebar } from "../_context/SidebarContext";
import ConversationItem from "./ConversationItem";


/**
 * Mock data for conversation list
 */
const mockConversations = [
  {
    conv_id: 1,
    conv_type: "single",
    last_msg_text: "Hello, how are you?",
    participants: [
      {
        user_id: 2,
        username: "Shiya Su",
        avatar_url: "/images/user_avatar_4.png",
      }
    ],
    created_at: "2024-07-10 09:00:00",
    updated_at: "2024-07-15 12:30:00",
  },
  {
    conv_id: 2,
    conv_type: "single",
    last_msg_text: "See you tomorrow!",
    participants: [
      {
        user_id: 3,
        username: "Boxiang",
        avatar_url: "/images/user_avatar_1.png",
      }
    ],
    created_at: "2024-07-12 14:20:00",
    updated_at: "2024-07-14 18:45:00",
  },
  {
    conv_id: 3,
    conv_type: "group",
    title: "CS407 Project Team",
    last_msg_text: "Let's meet at the coffee shop",
    participants: [
      {
        user_id: 4,
        username: "Charlie",
        avatar_url: "/images/user_avatar.png",
      },
      {
        user_id: 5,
        username: "Diana",
        avatar_url: "/images/user_avatar_9.png",
      },
      {
        user_id: 6,
        username: "Eve",
        avatar_url: "/images/user_avatar_8.png",
      },
      {
        user_id: 7,
        username: "Eve",
        avatar_url: "/images/user_avatar_0.png",
      },
    ],
    created_at: "2024-07-08 10:30:00",
    updated_at: "2024-07-13 16:20:00",
  },
  {
    conv_id: 4,
    conv_type: "single",
    last_msg_text: "Thanks for the help!",
    participants: [
      {
        user_id: 7,
        username: "Tony Wei",
        avatar_url: "/images/user_avatar_6.png",
      }
    ],
    created_at: "2024-07-11 11:15:00",
    updated_at: "2024-07-12 09:30:00",
  },
  {
    conv_id: 5,
    conv_type: "group",
    title: "CS544 Study",
    last_msg_text: "Great job everyone! 👏",
    participants: [
      {
        user_id: 8,
        username: "Grace",
        avatar_url: "/images/user_avatar.png",
      },
      {
        user_id: 9,
        username: "Henry",
        avatar_url: "/images/user_avatar_7.png",
      },
      {
        user_id: 11,
        username: "Jack",
        avatar_url: "/images/user_avatar_10.png",
      }
    ],
    created_at: "2024-07-05 08:00:00",
    updated_at: "2024-07-11 20:15:00",
  },
  {
    conv_id: 6,
    conv_type: "single",
    last_msg_text: "Can we reschedule?",
    participants: [
      {
        user_id: 12,
        username: "P(x,y)",
        avatar_url: "/images/user_avatar_0.png",
      }
    ],
    created_at: "2024-07-09 15:45:00",
    updated_at: "2024-07-10 14:20:00",
  },
  {
    conv_id: 7,
    conv_type: "single",
    last_msg_text: "Happy birthday! 🎉",
    participants: [
      {
        user_id: 13,
        username: "Boyuan Wang",
        avatar_url: "/images/user_avatar_12.png",
      }
    ],
    created_at: "2024-07-07 12:00:00",
    updated_at: "2024-07-09 10:30:00",
  },
  {
    conv_id: 10,
    conv_type: "single",
    last_msg_text: "Weekend plans?",
    participants: [
      {
        user_id: 14,
        username: "Tianyuan Ru",
        avatar_url: "/images/user_avatar_13.png",
      },
    ],
    created_at: "2024-07-06 19:30:00",
    updated_at: "2024-07-08 22:45:00",
  },
    {
    conv_id: 11,
    conv_type: "single",
    last_msg_text: "But I feel like I've over-studied a bit.",
    participants: [
      {
        user_id: 13,
        username: "Fu Liye",
        avatar_url: "/images/user_avatar_9.png",
      }
    ],
    created_at: "2024-07-07 12:00:00",
    updated_at: "2024-07-09 10:30:00",
  },
  {
    conv_id: 12,
    conv_type: "single",
    last_msg_text: "Holiday trip ideas?",
    participants: [
      {
        user_id: 14,
        username: "Enhui Zhao",
        avatar_url: "/images/user_avatar_8.png",
      },
    ],
    created_at: "2024-07-06 19:30:00",
    updated_at: "2024-07-08 22:45:00",
  }
];

export default function ConversationList() {
  const { selectedConversationId } = useSidebar();
  
  return (
    <>
      {mockConversations.map((conv, index) => (
        <ConversationItem 
          key={conv.conv_id} 
          conversation={conv} 
          index={index}
          onClick={() => {
            console.log(`Selected conversation ID: ${conv.conv_id}`);
          }}
        />
      ))}
    </>
  );
}
