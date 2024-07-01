// src/pages/admin/SystemSettingsPage.js

import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/admin/Sidebar';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const PageTitle = styled.h2`
  margin-bottom: 2rem;
  color: #1e3a5f;
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

const SystemSettingsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PageTitle>System Settings</PageTitle>
        <SettingsForm onSubmit={handleSubmit}>
          <Input type="text" placeholder="Setting 1" required />
          <Input type="text" placeholder="Setting 2" required />
          <Button type="submit">Save Settings</Button>
        </SettingsForm>
      </MainContent>
    </Container>
  );
};

export default SystemSettingsPage;
