import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../../../components/admin/Sidebar';
import { getAllDiscussions, getDiscussionDetails, createDiscussion } from '../../../services/discussionService';

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

const DiscussionList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const DiscussionItem = styled.div`
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

const DiscussionDetails = styled.div`
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

const NewDiscussionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1e3a5f;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DiscussionBoardPage = () => {
  const [discussions, setDiscussions] = useState([]);
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchDiscussions = async () => {
      try {
        const response = await getAllDiscussions();
        setDiscussions(response.data);
      } catch (error) {
        console.error('Error fetching discussions:', error);
      }
    };

    fetchDiscussions();
  }, []);

  useEffect(() => {
    if (selectedDiscussion) {
      const fetchDiscussionDetails = async () => {
        try {
          const response = await getDiscussionDetails(selectedDiscussion._id);
          setSelectedDiscussion(response.data);
        } catch (error) {
          console.error('Error fetching discussion details:', error);
        }
      };

      fetchDiscussionDetails();
    }
  }, [selectedDiscussion]);

  const handleNewDiscussionChange = (e) => {
    const { name, value } = e.target;
    setNewDiscussion((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNewDiscussionSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDiscussion(newDiscussion);
      setNewDiscussion({ title: '', content: '' });
      const response = await getAllDiscussions();
      setDiscussions(response.data);
    } catch (error) {
      console.error('Error creating discussion:', error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    // Implement send message functionality here
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <DiscussionList>
          {discussions.map((discussion) => (
            <DiscussionItem
              key={discussion._id}
              onClick={() => setSelectedDiscussion(discussion)}
            >
              {discussion.title}
            </DiscussionItem>
          ))}
        </DiscussionList>
        <ContentWrapper>
          <Title>Discussion Board</Title>
          <NewDiscussionForm onSubmit={handleNewDiscussionSubmit}>
            <Label>Title</Label>
            <Input
              type="text"
              name="title"
              value={newDiscussion.title}
              onChange={handleNewDiscussionChange}
              required
            />
            <Label>Content</Label>
            <TextArea
              name="content"
              value={newDiscussion.content}
              onChange={handleNewDiscussionChange}
              required
            />
            <Button type="submit">Create Discussion</Button>
          </NewDiscussionForm>
          {selectedDiscussion && (
            <>
              <DiscussionDetails>
                {selectedDiscussion.messages.map((msg) => (
                  <Message key={msg._id} isSender={msg.isSender}>
                    {msg.content}
                  </Message>
                ))}
              </DiscussionDetails>
              <Form onSubmit={handleSendMessage}>
                <Input
                  type="text"
                  placeholder="Type your message"
                  required
                />
                <Button type="submit">Send</Button>
              </Form>
            </>
          )}
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default DiscussionBoardPage;
