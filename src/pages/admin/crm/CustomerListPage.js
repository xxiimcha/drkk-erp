import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllUsers } from '../../../services/userService';
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
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: 100vh;
  border-radius: 10px;
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

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const CustomerListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ContentWrapper>
            <Title>Customer List</Title>
            <Table>
              <thead>
                <tr>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>Birthday</Th>
                  <Th>Username</Th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{new Date(user.birthday).toLocaleDateString()}</Td>
                    <Td>{user.username}</Td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default CustomerListPage;
