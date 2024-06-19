// src/pages/admin/AdminLoginPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e3a5f;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
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
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1e3a5f;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding-left: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 1rem;
  text-align: center;
`;

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Default credentials
    const defaultUsername = 'admin';
    const defaultPassword = 'admin';

    if (username === defaultUsername && password === defaultPassword) {
      // Redirect to dashboard
      navigate('/admin/dashboard');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <Container>
      <LoginBox>
        <Title>Admin Login</Title>
        <Form onSubmit={handleLogin}>
          <Label htmlFor="username">Username</Label>
          <Input 
            type="text" 
            id="username" 
            name="username" 
            required 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password" 
            name="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Log In</Button>
        </Form>
      </LoginBox>
    </Container>
  );
};

export default AdminLoginPage;
