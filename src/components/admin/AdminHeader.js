// src/components/admin/AdminHeader.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e3a5f;
  padding: 1rem 2rem;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const ProfileSection = styled.div`
  position: relative;
`;

const ProfileName = styled.span`
  cursor: pointer;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  color: #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fa;
  }
`;

const AdminHeader = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Handle logout logic
    navigate('/admin/login');
  };

  const handleSettings = () => {
    navigate('/admin/settings');
  };

  return (
    <HeaderContainer>
      <div>DRKK Admin</div>
      <ProfileSection>
        <ProfileName onClick={toggleDropdown}>Admin Name</ProfileName>
        <DropdownMenu show={dropdownVisible}>
          <DropdownItem onClick={handleSettings}>Settings</DropdownItem>
          <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
        </DropdownMenu>
      </ProfileSection>
    </HeaderContainer>
  );
};

export default AdminHeader;
