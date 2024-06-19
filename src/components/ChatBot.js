// src/components/ChatBot.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ChatButton = styled.button`
  position: fixed;
  bottom: 3rem; /* Adjusted to create a gap */
  right: 2rem;
  background-color: #007bff;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

const ChatContainer = styled.div`
  position: fixed;
  bottom: 8rem; /* Adjusted to create a gap */
  right: 2rem;
  width: 300px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ChatHeader = styled.div`
  background-color: #1e3a5f;
  color: #fff;
  padding: 0.5rem;
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChatBody = styled.div`
  padding: 1rem;
  height: 200px;
  overflow-y: auto;
`;

const Message = styled.div`
  background-color: #4ecdc4;
  color: #fff;
  padding: 0.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: inline-block;
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #1e3a5f;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 20px;
  margin-right: 0.5rem;
  padding-left: 1rem;
`;

const SendButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatOptionButton = styled.button`
  background-color: #ccc;
  color: #000;
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
  display: block;
  margin: 0.5rem 0;
  width: 100%;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  cursor: pointer;
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatButton onClick={toggleChat}>
        💬
      </ChatButton>
      {isOpen && (
        <ChatContainer>
          <ChatHeader>
            DRKK BOT
            <CloseButton onClick={toggleChat}>×</CloseButton>
          </ChatHeader>
          <ChatBody>
            <Message>
              Greetings! This is the Chatbot of DRKK, ano ang aking maitutulong sa'yo?
            </Message>
            <ChatOptionButton>View 3D Product Layout</ChatOptionButton>
            <ChatOptionButton>Product Estimation</ChatOptionButton>
            <ChatOptionButton>Talk with an Agent</ChatOptionButton>
          </ChatBody>
          <ChatInputContainer>
            <ChatInput type="text" placeholder="Type a message..." />
            <SendButton>➤</SendButton>
          </ChatInputContainer>
        </ChatContainer>
      )}
    </>
  );
};

export default ChatBot;
