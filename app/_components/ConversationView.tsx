"use client";

interface ConversationViewProps {
  conversationId?: number | null;
}

export default function ConversationView({ conversationId }: ConversationViewProps) {
  if (!conversationId) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        <div className="text-center">
          <div className="text-4xl mb-4">💬</div>
          <div className="text-lg font-medium">选择一个对话开始聊天</div>
          <div className="text-sm text-gray-400 mt-2">点击左侧对话列表中的任一项</div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-white/10 rounded-lg p-4">
      <div className="flex-1 flex items-center justify-center text-gray-600">
        <div className="text-center">
          <div className="text-3xl mb-3">🚧</div>
          <div className="text-lg font-medium">对话视图开发中</div>
          <div className="text-sm text-gray-500 mt-2">
            当前选中对话 ID: {conversationId}
          </div>
        </div>
      </div>
    </div>
  );
}
