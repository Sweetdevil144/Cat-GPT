import React from "react";
import Message from "./Message";

type MessageType = {
  type: string;
  content: string;
  sender: "user" | "ollama";
};

type MessageListProps = {
  messages: MessageType[];
};

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex flex-col h-full space-y-4">
      {messages.map((msg, index) => (
        <Message
          key={index}
          type={msg.type}
          content={msg.content}
          sender={msg.sender}
        />
      ))}
    </div>
  );
};

export default MessageList;
