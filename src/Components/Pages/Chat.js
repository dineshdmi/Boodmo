// Chat.js
import React, { useState } from 'react';
import './CSS/Chat.css';

const Chat = ({ onClose }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        console.log('Message sent:', message);
        setMessage('');
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h3>Live Chat Support</h3>
            </div>
            <div className="chat-messages">
                {/* Display chat messages here */}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
