import React from 'react';
import { Chatbot } from 'react-chatbot-kit';

const chats = () => {
  // Define the bot's message history
  const messageHistory = [
    { id: 1, message: 'Hello!', sender: 'user' },
    { id: 2, message: 'Hi there!', sender: 'bot' },
  ];

  // Define action handlers for user input
  const handleUserMessage = (message) => {
    // Handle user input here
  };

  return (
    <div>
      <h1>Chatbot</h1>
      <Chatbot
        messages={messageHistory}
        handleUserMessage={handleUserMessage}
        // Additional configuration props for UI customization
      />
    </div>
  );
};


export default chats;
