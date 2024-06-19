// src/pages/AboutUsPage.js
import React from 'react';
import styled from 'styled-components';
import ChatBot from '../components/ChatBot';

const Container = styled.div`
  padding: 2rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  background-image: url('/path/to/your/background-image.jpg');
  background-size: cover;
  background-position: center;
  padding: 2rem;
  border-radius: 10px;
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
`;

const TextContainer = styled.div`
  background-color: #1e3a5f;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Divider = styled.hr`
  border: none;
  border-left: 2px solid #fff;
  height: 100px;
  margin: 0 1rem;
`;

const MissionText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const AboutUsPage = () => {
  return (
    <Container>
      <ContentContainer>
        <LogoCircle>DRKK LOGO</LogoCircle>
        <TextContainer>
          <Title>The DRKK Aluminum and Glass Works</Title>
          <Divider />
          <MissionText>
            <img src="/path/to/your/icon.png" alt="Icon" style={{ marginRight: '0.5rem' }} />
            "Transforming spaces with precision and elegance through top-tier aluminum and glass installations."
          </MissionText>
          <Title>About Us</Title>
        </TextContainer>
      </ContentContainer>
      <ChatBot />
    </Container>
  );
};

export default AboutUsPage;
