import React from 'react'
import ChatBot from 'react-simple-chatbot';
const chats = () => {
  return (
    <div><ChatBot className="fixed bottom-5 right-5 z-40"
    steps={[
      {
        id: 'hello-world',
        message: 'Hello World!',
        end: true,
      },
    ]}
  /></div>
  )
}

export default chats
