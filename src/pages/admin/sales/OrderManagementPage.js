// frontend/src/pages/admin/sales/OrderManagementPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllOrders, createOrder } from '../../../services/salesService';
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

const OrderList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const OrderItem = styled.div`
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

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ customerName: '', items: [], total: 0 });

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await getAllOrders();
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createOrder(newOrder);
    const response = await getAllOrders();
    setOrders(response.data);
    setNewOrder({ customerName: '', items: [], total: 0 });
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <OrderList>
          <Title>Order Management</Title>
          {orders.map((order) => (
            <OrderItem key={order._id}>
              {order.customerName}: ${order.total}
            </OrderItem>
          ))}
        </OrderList>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="customerName"
            value={newOrder.customerName}
            onChange={handleChange}
            placeholder="Customer Name"
            required
          />
          <Input
            type="number"
            name="total"
            value={newOrder.total}
            onChange={handleChange}
            placeholder="Total Amount"
            required
          />
          <Button type="submit">Create Order</Button>
        </Form>
      </MainContent>
    </Container>
  );
};

export default OrderManagementPage;
