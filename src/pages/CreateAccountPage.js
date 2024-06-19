import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../services/userService';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1e3a5f;
`;

const CreateAccountBox = styled.div`
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
  text-align: left;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1e3a5f;
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
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

const CreateAccountPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const user = { name, email, birthday, username, password };
    addUser(user)
      .then(() => {
        navigate('/'); // Redirect to the dashboard or login page after account creation
      })
      .catch((error) => {
        console.error('There was an error creating the account!', error);
      });
  };

  return (
    <Container>
      <CreateAccountBox>
        <Title>Create Account</Title>
        <Form onSubmit={handleCreateAccount}>
          <InputContainer>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Birthday</Label>
            <Input
              type="date"
              name="birthday"
              required
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Username</Label>
            <Input
              type="text"
              name="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Create Password</Label>
            <Input
              type="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="confirmPassword"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputContainer>
          <Button type="submit">Create Account</Button>
        </Form>
      </CreateAccountBox>
    </Container>
  );
};

export default CreateAccountPage;
