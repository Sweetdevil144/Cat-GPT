import React from 'react';
import './MainLayout.css';

const MainLayout: React.FC = () => {
    return (
        <div className="main-layout">
            <header className="layout-header">
                <h1>cat-GPT</h1>
            </header>
            <main className='chat-sec'>
                <div>
                    {/* Chat Area Placeholder */}
                    <span>CHAT AREA</span>

                </div>
            </main>

            <footer className='footer-sec'>
                <div className='input-sec'>
                    {/* User Input Placeholder */}
                    <input
                        type="text"
                        className='user-input-field'
                        placeholder='USER INPUT SECTION '
                    />
                    <button className='send-button'>REQUEST</button>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
