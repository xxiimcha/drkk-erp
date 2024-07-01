// src/pages/admin/hrm/EmployeeDatabasePage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchEmployees } from '../../../services/hrmService';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/admin/Sidebar';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #1e3a5f; /* Match sidebar background color */
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff; /* Set the main content background to white */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  margin: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const EmployeeTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const TableHeader = styled.th`
  padding: 1rem;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #ccc;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border: 1px solid #ccc;
  text-align: left;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  align-self: flex-end;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => (props.edit ? '#28a745' : '#ffc107')};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 0.5rem;
`;

const EmployeeDatabasePage = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const response = await fetchEmployees();
      setEmployees(response.data);
    };

    fetchEmployeeData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <Title>Employee Database</Title>
        <Button onClick={() => navigate('/hrm/add-employee')}>Add New Employee</Button>
        <EmployeeTable>
          <thead>
            <tr>
              <TableHeader>Name</TableHeader>
              <TableHeader>Position</TableHeader>
              <TableHeader>Employee ID</TableHeader>
              <TableHeader>Actions</TableHeader>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <TableRow key={employee._id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>{employee.employeeId}</TableCell>
                <TableCell>
                  <ActionButton edit onClick={() => navigate(`/hrm/edit-employee/${employee._id}`)}>Edit</ActionButton>
                  <ActionButton onClick={() => navigate(`/hrm/view-employee/${employee._id}`)}>View</ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </EmployeeTable>
      </MainContent>
    </Container>
  );
};

export default EmployeeDatabasePage;
