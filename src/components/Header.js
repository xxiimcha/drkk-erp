// src/components/Header.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal'; // Ensure this matches the actual file name

const HeaderContainer = styled.header`
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

const NavLink = styled(Link)`
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

const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <HeaderContainer>
        <Logo>DRKK LOGO</Logo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/works">Works</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
        <LoginButton onClick={openModal}>LOGIN</LoginButton>
      </HeaderContainer>
      <LoginModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  );
};

export default Header;
