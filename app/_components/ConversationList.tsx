"use client";

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
        username: "Alice",
        avatar_url: "/images/user_avatar_3.png",
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
        username: "Bob",
        avatar_url: "/images/user_avatar_1.png",
      }
    ],
    created_at: "2024-07-12 14:20:00",
    updated_at: "2024-07-14 18:45:00",
  },
  {
    conv_id: 3,
    conv_type: "group",
    last_msg_text: "Let's meet at the coffee shop",
    participants: [
      {
        user_id: 4,
        username: "Charlie",
        avatar_url: "/images/user_avatar_2.png",
      },
      {
        user_id: 5,
        username: "Diana",
        avatar_url: "/images/user_avatar_4.png",
      },
      {
        user_id: 6,
        username: "Eve",
        avatar_url: "/images/user_avatar_5.png",
      }
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
        username: "Frank",
        avatar_url: "/images/user_avatar_6.png",
      }
    ],
    created_at: "2024-07-11 11:15:00",
    updated_at: "2024-07-12 09:30:00",
  },
  {
    conv_id: 5,
    conv_type: "group",
    last_msg_text: "Great job everyone! 👏",
    participants: [
      {
        user_id: 8,
        username: "Grace",
        avatar_url: "/images/user_avatar_7.png",
      },
      {
        user_id: 9,
        username: "Henry",
        avatar_url: "/images/user_avatar_8.png",
      },
      {
        user_id: 10,
        username: "Ivy",
        avatar_url: "/images/user_avatar_9.png",
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
        username: "Kate",
        avatar_url: "/images/user_avatar_11.png",
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
        username: "Leo",
        avatar_url: "/images/user_avatar_12.png",
      }
    ],
    created_at: "2024-07-07 12:00:00",
    updated_at: "2024-07-09 10:30:00",
  },
  {
    conv_id: 8,
    conv_type: "group",
    last_msg_text: "Weekend plans?",
    participants: [
      {
        user_id: 14,
        username: "Mia",
        avatar_url: "/images/user_avatar_13.png",
      },
      {
        user_id: 15,
        username: "Noah",
        avatar_url: "/images/user_avatar_14.png",
      }
    ],
    created_at: "2024-07-06 19:30:00",
    updated_at: "2024-07-08 22:45:00",
  }
];

export default function ConversationList() {
  return (
    <>
      {mockConversations.map((conv, index) => (
        <ConversationItem 
          key={conv.conv_id} 
          conversation={conv} 
          index={index}
          onClick={() => {
            console.log('点击了会话:', conv.conv_id);
          }}
        />
      ))}
    </>
  );
}
