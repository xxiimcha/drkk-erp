// frontend/src/pages/admin/sales/QuotationManagementPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllQuotations, createQuotation } from '../../../services/salesService';
import Sidebar from '../../../components/admin/Sidebar';

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

const QuotationList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const QuotationItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
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

const QuotationManagementPage = () => {
  const [quotations, setQuotations] = useState([]);
  const [newQuotation, setNewQuotation] = useState({ customerName: '', items: [], total: 0 });

  useEffect(() => {
    const fetchQuotations = async () => {
      const response = await getAllQuotations();
      setQuotations(response.data);
    };

    fetchQuotations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewQuotation({ ...newQuotation, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createQuotation(newQuotation);
    const response = await getAllQuotations();
    setQuotations(response.data);
    setNewQuotation({ customerName: '', items: [], total: 0 });
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <QuotationList>
          <Title>Quotation Management</Title>
          {quotations.map((quotation) => (
            <QuotationItem key={quotation._id}>
              {quotation.customerName}: ${quotation.total}
            </QuotationItem>
          ))}
        </QuotationList>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="customerName"
            value={newQuotation.customerName}
            onChange={handleChange}
            placeholder="Customer Name"
            required
          />
          <Input
            type="number"
            name="total"
            value={newQuotation.total}
            onChange={handleChange}
            placeholder="Total Amount"
            required
          />
          <Button type="submit">Create Quotation</Button>
        </Form>
      </MainContent>
    </Container>
  );
};

export default QuotationManagementPage;
