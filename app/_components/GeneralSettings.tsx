"use client";

import { UserCog, SunMoon, LogOut, ArrowRight } from "lucide-react";

export default function GeneralSettings() {
  return (
    <div
      className="animate-level-reveal"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #d1d5db',
        borderColor: 'rgba(209, 213, 219, 0.5)',
        borderRadius: '32px',
        padding: '4px',
        marginBottom: '10px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      }}>
      {/* user settings */}
      <div className="w-full flex py-2 mt-1 pl-4 pr-4 rounded-2xl items-center">
        <UserCog size={20} style={{ color: '#a16207', verticalAlign: 'middle', marginRight: '12px' }} />
        <span className="text-sm font-medium" style={{ color: '#a16207', verticalAlign: 'middle' }}>User Settings</span>
        <ArrowRight size={16} style={{ color: '#a16207', marginLeft: 'auto', verticalAlign: 'middle' }} />
      </div>
      {/* appearance */}
      <div className="w-full flex py-1 mb-1 pl-4 pr-4 rounded-2xl items-center">
        <SunMoon size={20} style={{ color: '#a16207', verticalAlign: 'middle', marginRight: '12px' }} />
        <span className="text-sm font-medium" style={{ color: '#a16207', verticalAlign: 'middle' }}>Appearance</span>
        <span className="text-xs" style={{ color: '#a16207', marginLeft: 'auto', verticalAlign: 'middle' }} >暂时不可用</span>
      </div>
      {/* logout */}
      <div className="w-full flex py-1 pl-4 pr-4 rounded-2xl items-center mb-2">
        <LogOut size={20} style={{ color: '#a16207', verticalAlign: 'middle', marginRight: '12px' }} />
        <span className="text-sm font-medium" style={{ color: '#a16207', verticalAlign: 'middle' }}>Log Out</span>
      </div>
    </div>
  );
}