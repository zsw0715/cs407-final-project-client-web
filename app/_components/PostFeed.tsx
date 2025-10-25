"use client";

/**
 * mock data for posts
 */
const mockPosts = [
  {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  },
  {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  },
  {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  },
  {
    title: "Exploring the Hidden Gems of the City",
    summary: "Discover lesser-known spots that offer unique experiences away from the usual tourist trails."
  },
  {
    title: "A Foodie's Guide to Local Cuisine",
    summary: "Dive into the culinary delights of the area with recommendations for must-try dishes and eateries."
  },
  {
    title: "Outdoor Adventures Await",
    summary: "From hiking trails to water sports, find out where to get your adrenaline fix in nature."
  }
];

import PostCard from "./PostCard";

export default function PostFeed() {
  return (
    <>
      {
        mockPosts.map((post, index) => (
          <PostCard key={index} title={post.title} summary={post.summary} index={index} />
        ))
      }
    </>
  );
}

