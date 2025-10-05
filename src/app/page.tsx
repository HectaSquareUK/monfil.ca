import ChatWindow from "./components/ChatWindow";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Modern Chat</h1>
      <ChatWindow />
    </main>
  );
}
