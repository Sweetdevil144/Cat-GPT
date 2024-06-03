import React from 'react';


const MainLayout: React.FC = () => {
    return (
        <div className="flex flex-col h-screen">
            <header className="bg-blue-500 text-black p-5 text-center">
                <h1 className="text-3xl font-bold">Cat-GPT</h1>
            </header>
            <main className="flex-1 bg-blue-100 p-4 overflow-auto">
                {/* Chat Area Placeholder */}
                <div className="h-full flex flex-col items-center justify-center">
                    <span className="text-black-500 mb-4">CHAT AREA</span>
                    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" alt="Cat GIF" className="max-w-full max-h-full object-contain" />
                </div>
            </main>
            <footer className="bg-white p-4 flex items-center">
                {/* User Input Placeholder */}
                <input
                    type="text"
                    className="flex-1 border border-gray-300 p-2 mr-2"
                    placeholder="USER INPUT SECTION"
                />
                <button className="bg-green-500 text-black p-2">
                    REQUEST
                </button>
            </footer>
        </div>
    );
};

export default MainLayout;

