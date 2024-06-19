// src/pages/ContactPage.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ChatBot from '../components/ChatBot';

const Container = styled.div`
  padding: 2rem;
  background-color: #1e3a5f;
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
  gap: 2rem;
  padding: 2rem 0;
`;

const LeftContainer = styled.div`
  flex: 1;
  background-color: #1e3a5f;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const RightContainer = styled.div`
  flex: 1;
  background-color: #1e3a5f;
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const AddressList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const AddressItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 25px;
  padding-left: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  color: #fff;
  padding: 2rem 0;
`;

const CustomCalendar = styled(Calendar)`
  width: 100%;
  background-color: #fff; /* Changed to white background */
  color: #000;
  border: none;
  border-radius: 10px;
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: #1e3a5f;
    color: #fff;
    border-radius: 10px 10px 0 0; /* Adjusted border radius */
  }
  .react-calendar__tile {
    padding: 0.75rem;
    background: none;
    border: none;
    color: #000;
    &:hover,
    &:focus {
      background-color: #007bff;
      color: #fff;
    }
  }
  .react-calendar__tile--active {
    background-color: #007bff;
    color: #fff;
  }
`;

const ContactPage = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <Container>
      <ContentContainer>
        <LeftContainer>
          <Title>CONTACT</Title>
          <Subtitle>OUR ADDRESS</Subtitle>
          <MapContainer>
            <iframe
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0, borderRadius: '10px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.0049502156126!2d120.98899670000002!3d14.311145099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d6786263e329%3A0xcae33c046de16ff1!2sPaliparan%20Rd%2C%20Dasmari%C3%B1as%2C%20Cavite!5e0!3m2!1sen!2sph!4v1718024913090!5m2!1sen!2sph"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </MapContainer>
          <AddressList>
            <AddressItem>📍 Paliparan Dasmariñas City, Cavite</AddressItem>
            <AddressItem>Other Branch Address</AddressItem>
            <AddressItem>Other Branch Address</AddressItem>
            <AddressItem>Other Branch Address</AddressItem>
          </AddressList>
          <Subtitle>Contact Details</Subtitle>
          <AddressList>
            <AddressItem>📞 Contact Details</AddressItem>
            <AddressItem>Contact Details</AddressItem>
            <AddressItem>Contact Details</AddressItem>
          </AddressList>
        </LeftContainer>
        <RightContainer>
          <Title>Need any glass and aluminum services?</Title>
          <Subtitle>SET APPOINTMENT NOW!</Subtitle>
          <Form>
            <InputContainer>
              <Label>Name</Label>
              <Input type="text" name="name" required />
            </InputContainer>
            <InputContainer>
              <Label>Address</Label>
              <Input type="text" name="address" required />
            </InputContainer>
            <InputContainer>
              <Label>Email</Label>
              <Input type="email" name="email" required />
            </InputContainer>
            <InputContainer>
              <Label>Select Schedule</Label>
              <CustomCalendar value={date} onChange={handleDateChange} />
            </InputContainer>
            <Button type="submit">Set this schedule!</Button>
          </Form>
        </RightContainer>
      </ContentContainer>
      <Footer>
        ©2024 DRKK Aluminum and Glass Works. All Rights Reserved. | Terms of use | Privacy Environmental Policy
      </Footer>
      <ChatBot />
    </Container>
  );
};

export default ContactPage;
