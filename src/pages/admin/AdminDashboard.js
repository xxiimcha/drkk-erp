import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/admin/Sidebar';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f0f0f0;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
`;

const AdminDashboard = () => {
  return (
    <Container>
      <Sidebar />
      <MainContent>
        {/* Your dashboard content here */}
      </MainContent>
    </Container>
  );
};

export default AdminDashboard;
