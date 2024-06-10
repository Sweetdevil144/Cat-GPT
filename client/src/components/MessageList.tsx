import React from "react";
import Message from "./Message";
import { MessageType } from "../redux/store";

type MessageListProps = {
  message:MessageType[];
};

const MessageList: React.FC<MessageListProps> = ({ message}) => {
  return (
    <div className="flex flex-col h-full space-y-4">
      {message.map((msg, index) => (
        <Message
          key={index}
          message={msg}
        />
      ))}
    </div>
  );
};

export default MessageList;
