// MainLayout.tsx
import React, { useState, useEffect } from "react";
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

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 p-4">
        {messages.length === 0 ? <Tips /> : <MessageList messages={messages} />}
      </main>
      <Footer input={input} setInput={setInput} handleSend={handleSend} />
    </div>
  );
};

export default MainLayout;
