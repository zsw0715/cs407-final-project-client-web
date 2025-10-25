"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextType {
  isExpanded: boolean;
  setIsExpanded: (expanded: boolean) => void;
  selectedConversationId: number | null;
  setSelectedConversationId: (id: number | null) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedConversationId, setSelectedConversationId] = useState<number | null>(null);

  return (
    <SidebarContext.Provider value={{ 
      isExpanded, 
      setIsExpanded, 
      selectedConversationId, 
      setSelectedConversationId 
    }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}