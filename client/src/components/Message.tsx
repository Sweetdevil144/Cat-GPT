import React from "react";

type MessageProps = {
    type: string;
    content: string;
    sender: 'user' | 'ollama';
};

const Message: React.FC<MessageProps> = ({ type, content, sender }) => {
    const isUser = sender === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`p-4 rounded-lg max-w-xs ${isUser ? 'bg-green-500  text-white' : 'bg-blue-500 text-white'}`}>
                {type === 'text' && <p>{content}</p>}
                {type === 'link' && (
                    <a href={content} target="_blank" rel="noopener noreferrer">
                        {content}
                    </a>
                )}
                {type === 'image' && <img src={content} alt="Message" className="max-w-full h-auto" />}
            </div>
        </div>
    );
};

export default Message;

