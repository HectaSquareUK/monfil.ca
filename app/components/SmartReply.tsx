
const replies = [
  "Sounds good!",
  "I'm not sure.",
  "Can you tell me more?",
];

export default function SmartReply({ onSelectReply }: { onSelectReply: (text: string) => void }) {
  return (
    <div className="flex justify-center space-x-2">
      {replies.map((reply) => (
        <button
          key={reply}
          className="bg-gray-700 text-gray-200 px-4 py-2 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => onSelectReply(reply)}>
          {reply}
        </button>
      ))}
    </div>
  );
}
