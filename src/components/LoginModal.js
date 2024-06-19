import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    borderRadius: '10px',
    padding: '2rem',
    backgroundColor: '#1e3a5f',
    color: '#fff',
  },
};

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 25px;
  padding-left: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #6aa3db;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

const StyledLink = styled.a`
  color: #4ecdc4;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const ForgotPasswordLink = styled(StyledLink)`
  align-self: flex-start;
`;

const AdminLink = styled(StyledLink)`
  align-self: center;
  display: block;
  margin-top: 1rem;
`;

const CreateAccountLink = styled(StyledLink)`
  align-self: center;
  display: block;
  margin-top: 1rem;
`;

const LoginModal = ({ isOpen, onRequestClose }) => {
  const navigate = useNavigate();

  const handleAdminLoginClick = () => {
    onRequestClose();
    navigate('/admin/login');
  };

  const handleCreateAccountClick = () => {
    onRequestClose();
    navigate('/create-account');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} contentLabel="Login Modal">
      <h2 style={{ color: '#fff', textAlign: 'center' }}>Log-In</h2>
      <LoginForm>
        <InputContainer>
          <Label>Username</Label>
          <Input type="text" name="username" required />
        </InputContainer>
        <InputContainer>
          <Label>Password</Label>
          <Input type="password" name="password" required />
        </InputContainer>
        <ForgotPasswordLink href="#">Forgot password? Click Here</ForgotPasswordLink>
        <Button type="submit">Log-In</Button>
        <AdminLink as="button" onClick={handleAdminLoginClick}>ADMIN? Click here to log-in</AdminLink>
        <CreateAccountLink as="button" onClick={handleCreateAccountClick}>Create Account</CreateAccountLink>
      </LoginForm>
    </Modal>
  );
};

export default LoginModal;
