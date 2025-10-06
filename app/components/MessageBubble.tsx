
export default function MessageBubble({ text, isUser }: { text: string; isUser: boolean }) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`rounded-lg px-4 py-2 ${isUser ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"}`}>
        {text}
      </div>
    </div>
  );
}
