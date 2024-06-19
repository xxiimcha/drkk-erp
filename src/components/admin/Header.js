// src/components/admin/Header.js
import React from 'react';
import styled from 'styled-components';
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const HeaderItem = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-right: 0.5rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderItem>
        <IconContainer>
          <AiOutlineBell />
        </IconContainer>
      </HeaderItem>
      <HeaderItem>
        <IconContainer>
          <AiOutlineUser />
        </IconContainer>
      </HeaderItem>
    </HeaderContainer>
  );
};

export default Header;
