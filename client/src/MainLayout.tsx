// MainLayout.tsx
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tips from "./components/Tips";
import MessageList from "./components/MessageList";

type MessageType = {
  type: string;
  content: string;
  sender: "user" | "ollama";
};

const MainLayout: React.FC = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      const userMessage: MessageType = {
        type: "text",
        content: input,
        sender: "user",
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");
      const catMessage: MessageType = {
        type: "text",
        content: "I am a cat-GPT, How can I assist you?",
        sender: "ollama",
      };
      setMessages((prevMessages) => [...prevMessages, catMessage]);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-surface">
      <Header />
      <main className="flex-1 p-4 overflow-auto">
        {messages.length === 0 ? <Tips /> : <MessageList messages={messages} />}
      </main>
      <Footer input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
};

export default MainLayout;
