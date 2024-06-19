import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../../components/admin/Sidebar';
import { getAllMessages, sendMessage, getAllConversations } from '../../../services/messageService';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e3a5f; /* Match sidebar background color */
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #1e3a5f; /* Match sidebar background color */
  display: flex;
  gap: 1rem;
`;

const ConversationList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ConversationItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ContentWrapper = styled.div`
  flex: 3;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const ChatContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
`;

const Message = styled.div`
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background-color: ${props => (props.isSender ? '#007bff' : '#e0e0e0')};
  color: ${props => (props.isSender ? '#fff' : '#000')};
  align-self: ${props => (props.isSender ? 'flex-end' : 'flex-start')};
`;

const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const CommunicationHistoryPage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await getAllConversations();
        setConversations(response.data);
      } catch (error) {
        console.error('Error fetching conversations:', error);
      }
    };

    fetchConversations();
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      const fetchMessages = async () => {
        try {
          const response = await getAllMessages(selectedConversation._id);
          setMessages(response.data);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      };

      fetchMessages();
    }
  }, [selectedConversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(selectedConversation._id, { content: message });
      setMessage('');
      const response = await getAllMessages(selectedConversation._id);
      setMessages(response.data);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ConversationList>
          {conversations.map((conv) => (
            <ConversationItem
              key={conv._id}
              onClick={() => setSelectedConversation(conv)}
            >
              {conv.title}
            </ConversationItem>
          ))}
        </ConversationList>
        <ContentWrapper>
          <Title>Communication History</Title>
          <ChatContainer>
            {messages.map((msg) => (
              <Message key={msg._id} isSender={msg.isSender}>
                {msg.content}
              </Message>
            ))}
          </ChatContainer>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button type="submit">Send</Button>
          </Form>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default CommunicationHistoryPage;
