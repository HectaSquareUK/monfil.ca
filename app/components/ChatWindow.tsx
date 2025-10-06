
"use client";

import { useState } from "react";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SmartReply from "./SmartReply";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { text: "Hello!", isUser: false },
    { text: "Hi there!", isUser: true },
    { text: "How can I help you today?", isUser: false },
  ]);

  const handleSendMessage = (text: string) => {
    setMessages([...messages, { text, isUser: true }]);
  };

  return (
    <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg flex flex-col h-[600px]">
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, i) => (
          <MessageBubble key={i} text={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <div className="p-4 border-t border-gray-700">
        <SmartReply onSelectReply={handleSendMessage} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}
