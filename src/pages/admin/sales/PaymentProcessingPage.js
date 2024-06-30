// frontend/src/pages/admin/sales/PaymentProcessingPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllPayments, createPayment } from '../../../services/salesService';
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

const PaymentList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const PaymentItem = styled.div`
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

const PaymentProcessingPage = () => {
  const [payments, setPayments] = useState([]);
  const [newPayment, setNewPayment] = useState({ orderId: '', amount: 0, method: '' });

  useEffect(() => {
    const fetchPayments = async () => {
      const response = await getAllPayments();
      setPayments(response.data);
    };

    fetchPayments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPayment({ ...newPayment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPayment(newPayment);
    const response = await getAllPayments();
    setPayments(response.data);
    setNewPayment({ orderId: '', amount: 0, method: '' });
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PaymentList>
          <Title>Payment Processing</Title>
          {payments.map((payment) => (
            <PaymentItem key={payment._id}>
              Order ID: {payment.orderId}, Amount: ${payment.amount}, Method: {payment.method}
            </PaymentItem>
          ))}
        </PaymentList>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="orderId"
            value={newPayment.orderId}
            onChange={handleChange}
            placeholder="Order ID"
            required
          />
          <Input
            type="number"
            name="amount"
            value={newPayment.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />
          <Input
            type="text"
            name="method"
            value={newPayment.method}
            onChange={handleChange}
            placeholder="Payment Method"
            required
          />
          <Button type="submit">Process Payment</Button>
        </Form>
      </MainContent>
    </Container>
  );
};

export default PaymentProcessingPage;
