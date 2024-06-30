import React from "react";
import { MessageType } from "../redux/store";

type MessageProps = {
  message: MessageType;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  const { type, content, sender } = message;
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`p-4 rounded-lg max-w-[40rem] ${
          isUser ? "bg-surface-container" : "bg-primary-container"
        }`}
      >
        {type === "text" && <p>{content}</p>}
        {type === "link" && (
          <a
            href={content}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {content}
          </a>
        )}
        {type === "image" && (
          <img
            src={content}
            alt="Message"
            className="max-w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  );
};

export default Message;
