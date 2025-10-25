"use client";

import Image from "next/image";
import GenderIndicator from "./GenderIndicator";
import GeneralSettings from "./GeneralSettings";
import FriendRequest from "./FriendRequest";
import UserFriends from "./UserFriends";

export default function UserProfilePage() {
  return (
    <div className="flex flex-col">
      {/* user info block */}
      <div className="flex relative">
        <GenderIndicator gender="male" />
        {/* User Avatar */}
        <Image
          src="/images/user_avatar.png"
          alt="User Avatar"
          width={72}
          height={72}
          className="rounded-[28px] mb-4"
          style={{
            border: '3px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 0px 12px rgba(0, 0, 0, 0.1)'
          }}
        />
        {/* user info */}
        <div className="flex flex-col ml-4 mt-2">
          <h2 className="text-lg font-semibold">Shenwei</h2>
          <p className="text-xs text-gray-500">Joined Knot: Oct 15, 2025</p>
          <p className="text-xs text-gray-500">Email: shenwei@example.com</p>
        </div>
      </div>
      {/* general settings */}
      <GeneralSettings />
      {/* friend requests */}
      <FriendRequest />
      {/* user friends */}
      <UserFriends />
    </div>
  );
}