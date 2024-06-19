// src/pages/admin/project/ResourceAllocationPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../../components/admin/Sidebar';
import { getResourceAllocations, assignResource } from '../../../services/resourceService';

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

const ContentWrapper = styled.div`
  flex: 1;
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

const AllocationTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 1rem;
  background-color: #1e3a5f;
  color: #fff;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const AllocationRow = styled.tr`
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Form = styled.form`
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
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
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
  align-self: flex-end;
`;

const ResourceAllocationPage = () => {
  const [allocations, setAllocations] = useState([]);
  const [formData, setFormData] = useState({
    task: '',
    resource: '',
  });

  useEffect(() => {
    const fetchAllocations = async () => {
      try {
        const response = await getResourceAllocations();
        setAllocations(response.data);
      } catch (error) {
        console.error('Error fetching allocations:', error);
      }
    };

    fetchAllocations();
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
      await assignResource(formData);
      setFormData({ task: '', resource: '' });
      const response = await getResourceAllocations();
      setAllocations(response.data);
    } catch (error) {
      console.error('Error assigning resource:', error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ContentWrapper>
          <Title>Resource Allocation</Title>
          <Form onSubmit={handleSubmit}>
            <Label>Task</Label>
            <Select name="task" value={formData.task} onChange={handleChange} required>
              <option value="">Select Task</option>
              {/* Map tasks here */}
              <option value="task1">Task 1</option>
              <option value="task2">Task 2</option>
            </Select>
            <Label>Resource</Label>
            <Select name="resource" value={formData.resource} onChange={handleChange} required>
              <option value="">Select Resource</option>
              {/* Map resources here */}
              <option value="resource1">Resource 1</option>
              <option value="resource2">Resource 2</option>
            </Select>
            <Button type="submit">Assign Resource</Button>
          </Form>
          <AllocationTable>
            <thead>
              <tr>
                <Th>Task</Th>
                <Th>Resource</Th>
                <Th>Date Assigned</Th>
              </tr>
            </thead>
            <tbody>
              {allocations.map((allocation) => (
                <AllocationRow key={allocation._id}>
                  <Td>{allocation.task}</Td>
                  <Td>{allocation.resource}</Td>
                  <Td>{new Date(allocation.dateAssigned).toLocaleDateString()}</Td>
                </AllocationRow>
              ))}
            </tbody>
          </AllocationTable>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default ResourceAllocationPage;
