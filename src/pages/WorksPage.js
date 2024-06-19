// src/pages/WorksPage.js
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
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const WorkItem = styled.div`
  width: 30%;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: #1e3a5f;
  color: #fff;
`;

const WorkImage = styled.img`
  width: 100%;
  height: auto;
`;

const WorkTitle = styled.h3`
  padding: 1rem;
`;

const VerticalText = styled.div`
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: #1e3a5f;
  color: #fff;
  padding: 0.5rem;
  border-radius: 10px 0 0 10px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
`;

const WorksPage = () => {
  return (
    <Container>
      <ContentContainer>
        <WorksContainer>
          <WorkItem>
            <WorkImage src="/path/to/your/image1.jpg" alt="Aluminum and Glass Installation" />
            <WorkTitle>Aluminum and Glass Installation</WorkTitle>
          </WorkItem>
          <WorkItem>
            <WorkImage src="/path/to/your/image2.jpg" alt="Custom Glass Projects" />
            <WorkTitle>Custom Glass Projects</WorkTitle>
          </WorkItem>
          <WorkItem>
            <WorkImage src="/path/to/your/image3.jpg" alt="Glass Partitions and Enclosures" />
            <WorkTitle>Glass Partitions and Enclosures</WorkTitle>
          </WorkItem>
          <WorkItem>
            <WorkImage src="/path/to/your/image4.jpg" alt="Facade Cladding" />
            <WorkTitle>Facade Cladding</WorkTitle>
          </WorkItem>
          <WorkItem>
            <WorkImage src="/path/to/your/image5.jpg" alt="Stainless Gates, Fences, Railings" />
            <WorkTitle>Stainless Gates, Fences, Railings</WorkTitle>
          </WorkItem>
          <WorkItem>
            <WorkImage src="/path/to/your/image6.jpg" alt="Wooden Doors and Pivot Doors, Steps, Cabinets, Handrails, Bed Frames, Jambs, Wood Floors" />
            <WorkTitle>Wooden Doors and Pivot Doors, Steps, Cabinets, Handrails, Bed Frames, Jambs, Wood Floors</WorkTitle>
          </WorkItem>
        </WorksContainer>
        <Button>View 3D Virtual Layout</Button>
      </ContentContainer>
      <VerticalText>WORKS</VerticalText>
      <ChatBot />
    </Container>
  );
};

export default WorksPage;
