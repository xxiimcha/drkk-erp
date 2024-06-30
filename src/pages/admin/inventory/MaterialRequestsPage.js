// src/pages/admin/inventory/MaterialRequestsPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllMaterialRequests, createMaterialRequest, updateMaterialRequestStatus } from '../../../services/inventoryService';
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
  flex-direction: column;
`;

const RequestList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const RequestItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
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

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  background-color: ${props => (props.approve ? '#28a745' : '#dc3545')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MaterialRequestsPage = () => {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({ materialName: '', quantity: '' });

  useEffect(() => {
    const fetchRequests = async () => {
      const response = await getAllMaterialRequests();
      setRequests(response.data);
    };

    fetchRequests();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMaterialRequest(newRequest);
    const response = await getAllMaterialRequests();
    setRequests(response.data);
    setNewRequest({ materialName: '', quantity: '' });
  };

  const handleStatusChange = async (id, status) => {
    await updateMaterialRequestStatus(id, status);
    const response = await getAllMaterialRequests();
    setRequests(response.data);
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Form onSubmit={handleSubmit}>
          <Title>Create New Material Request</Title>
          <Input
            type="text"
            name="materialName"
            value={newRequest.materialName}
            onChange={handleChange}
            placeholder="Material Name"
            required
          />
          <Input
            type="number"
            name="quantity"
            value={newRequest.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            required
          />
          <Button type="submit">Create Request</Button>
        </Form>
        <RequestList>
          <Title>Material Requests</Title>
          {requests.map((request) => (
            <RequestItem key={request._id}>
              <div>
                {request.materialName}: {request.quantity}
              </div>
              <div>
                <ActionButton approve onClick={() => handleStatusChange(request._id, 'approved')}>
                  Approve
                </ActionButton>
                <ActionButton onClick={() => handleStatusChange(request._id, 'rejected')}>
                  Reject
                </ActionButton>
              </div>
            </RequestItem>
          ))}
        </RequestList>
      </MainContent>
    </Container>
  );
};

export default MaterialRequestsPage;
