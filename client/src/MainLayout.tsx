import React, { useState } from 'react';
import Message from './components/Message';

type Message={
    type:string;
    content:string;
    sender:'user'|'ollama';
}
const MainLayout: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim() !== '') {
            const userMessage: Message = { type: 'text', content: input, sender: 'user' };
            setMessages((userresponse) => [...userresponse, userMessage]);
            setInput('');
            const catMessage: Message = { type: 'text', content: 'I am a cat-GPT, How can I assist you?', sender: 'ollama' };
            setMessages((userresponse) => [...userresponse, catMessage]);
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blue-500 text-white p-5 text-center">
                <h1 className="text-3xl font-bold">Cat-GPT</h1>
            </header>
            
            <main className="flex-1 bg-blue-100 p-4 overflow-auto">
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
            </main>

            <footer className="bg-white p-4 flex items-center">
                <input
                    type="text"
                    className="flex-1 border border-gray-300 p-2 mr-2"
                    placeholder="USER INPUT SECTION"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button 
                   className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                   onClick={handleSend}>
                    REQUEST
                </button>
            </footer>
        </div>
    );
};
export default MainLayout;