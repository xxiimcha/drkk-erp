// src/pages/ServicesPage.js
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
  align-items: flex-start;
  gap: 2rem;
`;

const ImageContainer = styled.div`
  flex: 2;
  display: flex;
  gap: 1rem;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.div`
  flex: 1;
  background-color: #1e3a5f;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const MissionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const MissionText = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ServicesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ServicesPage = () => {
  return (
    <Container>
      <ContentContainer>
        <ImageContainer>
          <Image src="/path/to/your/image1.jpg" alt="Service Image 1" />
          <Image src="/path/to/your/image2.jpg" alt="Service Image 2" />
        </ImageContainer>
        <TextContainer>
          <MissionTitle>Our Mission</MissionTitle>
          <MissionText>
            Transforming spaces with precision and elegance through top-tier aluminum and glass installations.
          </MissionText>
          <h2>SERVICES</h2>
          <ServicesList>
            <ServiceItem>Aluminum High-end Glass Doors and Windows</ServiceItem>
            <ServiceItem>Aluminum Local Profiles</ServiceItem>
            <ServiceItem>UPVC Conch Heavy Duty Doors and Windows</ServiceItem>
            <ServiceItem>Tempered Glass Railings</ServiceItem>
            <ServiceItem>Tempered Glass Shower Enclosures</ServiceItem>
            <ServiceItem>Stainless Gates, Fences, Railings</ServiceItem>
            <ServiceItem>Tempered Glass Roofs, Floors, and Walls</ServiceItem>
            <ServiceItem>Wooden Doors and Pivot Doors, Steps, Cabinets, Handrails, Bed Frames, Jambs, Wood Floors</ServiceItem>
            <ServiceItem>ETC</ServiceItem>
          </ServicesList>
        </TextContainer>
      </ContentContainer>
      <ChatBot />
    </Container>
  );
};

export default ServicesPage;
