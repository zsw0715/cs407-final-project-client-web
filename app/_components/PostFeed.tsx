"use client";

/**
 * mock data for posts
 */
const mockPosts = [
  {
    username: "Shenwei",
    avatar_url: "/images/user_avatar.png",
    content_text: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails.",
    media_urls: [],
    loc_lat: 43.0731,
    loc_lng: -89.4012,
    loc_name: "Madison, WI",
    created_at: "2024-07-15 10:30:00",
    isLiked: false,
    likeCount: 5,
    likedAvatars: [
      "/images/user_avatar_7.png",
      "/images/user_avatar_9.png",
      "/images/user_avatar_2.png",
      "/images/user_avatar_4.png",
      "/images/user_avatar_5.png",
    ]
  },
  {
    username: "Boxiang",
    avatar_url: "/images/user_avatar_1.png",
    content_text: "Found this amazing coffee shop hidden in downtown. Perfect place to work remotely with great vibes!",
    media_urls: [],
    loc_lat: 40.7128,
    loc_lng: -74.0060,
    loc_name: "New York, NY",
    created_at: "2024-07-14 14:20:00",
    isLiked: true,
    likeCount: 12,
    likedAvatars: [
      "/images/user_avatar_2.png",
      "/images/user_avatar_3.png",
      "/images/user_avatar_4.png",
    ]
  },
  {
    username: "Sipei",
    avatar_url: "/images/user_avatar_2.png",
    content_text: "Sunset hiking trail with breathtaking views. Worth every step! 🌄",
    media_urls: [],
    loc_lat: 37.7749,
    loc_lng: -122.4194,
    loc_name: "San Francisco, CA",
    created_at: "2024-07-13 18:45:00",
    isLiked: false,
    likeCount: 8,
    likedAvatars: [
      "/images/user_avatar_1.png",
      "/images/user_avatar_5.png",
      "/images/user_avatar_6.png",
    ]
  },
  {
    username: "Minyuan",
    avatar_url: "/images/user_avatar_3.png",
    content_text: "Local farmers market has the best organic produce. Supporting local community feels great!",
    media_urls: [],
    loc_lat: 41.8781,
    loc_lng: -87.6298,
    loc_name: "Chicago, IL",
    created_at: "2024-07-12 09:15:00",
    isLiked: true,
    likeCount: 15,
    likedAvatars: [
      "/images/user_avatar_4.png",
      "/images/user_avatar_7.png",
      "/images/user_avatar_8.png",
    ]
  },
  {
    username: "Shiya Su",
    avatar_url: "/images/user_avatar_4.png",
    content_text: "Beach day vibes! Crystal clear water and perfect weather. Can't ask for more.",
    media_urls: [],
    loc_lat: 25.7617,
    loc_lng: -80.1918,
    loc_name: "Miami, FL",
    created_at: "2024-07-11 16:30:00",
    isLiked: false,
    likeCount: 22,
    likedAvatars: [
      "/images/user_avatar_1.png",
      "/images/user_avatar_2.png",
      "/images/user_avatar_9.png",
    ]
  },
  {
    username: "Liye Fu",
    avatar_url: "/images/user_avatar_9.png",
    content_text: "Mountain cabin weekend getaway. Disconnecting from digital world and reconnecting with nature.",
    media_urls: [],
    loc_lat: 39.7392,
    loc_lng: -104.9903,
    loc_name: "Denver, CO",
    created_at: "2024-07-10 12:00:00",
    isLiked: true,
    likeCount: 9,
    likedAvatars: [
      "/images/user_avatar_10.png",
      "/images/user_avatar_11.png",
      "/images/user_avatar.png",
    ]
  },
  {
    username: "P(x,y)",
    avatar_url: "/images/user_avatar_0.png",
    content_text: "Historic downtown walking tour revealed so many hidden gems and stories. Love learning about local history!",
    media_urls: [],
    loc_lat: 42.3601,
    loc_lng: -71.0589,
    loc_name: "Boston, MA",
    created_at: "2024-07-09 11:20:00",
    isLiked: false,
    likeCount: 6,
    likedAvatars: [
      "/images/user_avatar_7.png",
      "/images/user_avatar_8.png",
      "/images/user_avatar_0.png",
    ]
  },
];

import PostCard from "./PostCard";

export default function PostFeed() {
  const handleLike = (index: number) => {
    console.log(`Liked post ${index}`);
    // 这里可以添加实际的点赞逻辑
  };

  const handleShare = (index: number) => {
    console.log(`Shared post ${index}`);
    // 这里可以添加实际的转发逻辑
  };

  return (
    <>
      {
        mockPosts.map((post, index) => (
          <PostCard
            key={index}
            username={post.username}
            avatar_url={post.avatar_url}
            content_text={post.content_text}
            media_urls={post.media_urls}
            loc_lat={post.loc_lat}
            loc_lng={post.loc_lng}
            loc_name={post.loc_name}
            created_at={post.created_at}
            index={index}
            isLiked={post.isLiked}
            likeCount={post.likeCount}
            likedAvatars={post.likedAvatars}
            onLike={() => handleLike(index)}
            onShare={() => handleShare(index)}
          />
        ))
      }
    </>
  );
}

