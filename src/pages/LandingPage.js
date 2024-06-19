// src/pages/LandingPage.js
import React from 'react';
import styled from 'styled-components';
import ChatBot from '../components/ChatBot';

const Container = styled.div`
  text-align: center;
  padding: 2rem;
  background-image: url('/path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
`;

const Tagline = styled.h1`
  font-size: 2.5rem;
  color: #fff;
`;

const SubTagline = styled.p`
  font-size: 1.25rem;
  color: #fff;
`;

const AppointmentButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

const LogoCircle = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 2rem auto;
`;

const AdminLink = styled.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const LandingPage = ({ openModal }) => (
  <Container>
    <Tagline>DRKK TAG LINE</Tagline>
    <SubTagline>Where expectation meets excellency</SubTagline>
    <AppointmentButton>APPOINTMENT</AppointmentButton>
    <LogoCircle>DRKK LOGO</LogoCircle>
    <ChatBot />
  </Container>
);

export default LandingPage;
