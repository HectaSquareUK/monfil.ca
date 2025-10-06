
"use client";

import { useState } from "react";

export default function ChatInput({ onSendMessage }: { onSendMessage: (text: string) => void }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  return (
    <div className="flex mt-4">
      <input
        type="text"
        className="flex-1 bg-gray-700 text-white rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
