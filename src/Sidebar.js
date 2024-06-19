// src/components/admin/Sidebar.js
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #1e3a5f;
  color: #fff;
  padding: 2rem;
`;

const SidebarTitle = styled.h2`
  margin-bottom: 2rem;
`;

const SidebarItem = styled.div`
  margin-bottom: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>DRKK Admin</SidebarTitle>
      <SidebarItem>CRM</SidebarItem>
      <SidebarItem>3D Virtual Design Layout</SidebarItem>
      <SidebarItem>Project Management</SidebarItem>
      <SidebarItem>Inventory</SidebarItem>
      <SidebarItem>Sales and Billing</SidebarItem>
      <SidebarItem>HRM</SidebarItem>
      <SidebarItem>Reporting and Analytics</SidebarItem>
      <SidebarItem>Estimation Requests</SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
