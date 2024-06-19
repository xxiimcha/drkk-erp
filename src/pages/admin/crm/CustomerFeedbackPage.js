import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../../components/admin/Sidebar';
import { getAllFeedback, addFeedback } from '../../../services/feedbackService';

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
`;

const ContentWrapper = styled.div`
  flex: 3;
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: 100vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const Th = styled.th`
  padding: 1rem;
  background-color: #1e3a5f;
  color: #fff;
`;

const Td = styled.td`
  padding: 1rem;
  border: 1px solid #ccc;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1e3a5f;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const CustomerFeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [formData, setFormData] = useState({
    customerName: '',
    feedbackDetails: '',
  });

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await getAllFeedback();
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addFeedback(formData);
      setFormData({ customerName: '', feedbackDetails: '' });
      const response = await getAllFeedback();
      setFeedbacks(response.data);
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ContentWrapper>
          <Title>Customer Feedback</Title>
          <Form onSubmit={handleSubmit}>
            <Label>Customer Name</Label>
            <Input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
            <Label>Feedback Details</Label>
            <TextArea
              name="feedbackDetails"
              value={formData.feedbackDetails}
              onChange={handleChange}
              rows="5"
              required
            />
            <Button type="submit">Submit Feedback</Button>
          </Form>
          <Table>
            <thead>
              <tr>
                <Th>Customer Name</Th>
                <Th>Feedback Details</Th>
                <Th>Date</Th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback) => (
                <tr key={feedback._id}>
                  <Td>{feedback.customerName}</Td>
                  <Td>{feedback.feedbackDetails}</Td>
                  <Td>{new Date(feedback.createdAt).toLocaleDateString()}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default CustomerFeedbackPage;
