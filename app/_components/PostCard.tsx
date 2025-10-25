"use client";

import "@/app/_style/general.css";

export default function PostCard(
  { title, summary, index }: { title: string; summary: string; index: number }
) {
  return (
    <div 
      className="animate-level-reveal"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(10px)',
        border: '1px solid #d1d5db',
        borderColor: 'rgba(209, 213, 219, 0.5)',
        borderRadius: '24px',
        padding: '14px',
        marginBottom: '10px',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        marginTop: index === 0 ? '60px' : '0px',
      }}>
      <h3 style={{
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '5px',
        color: '#1f2937'
      }}>{title}</h3>
      <p style={{
        color: '#4b5563',
        fontSize: '14px'
      }}>{summary}</p>
    </div>
  );
}
