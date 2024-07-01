// src/pages/admin/SystemSettingsPage.js

import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/admin/Sidebar';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const PageTitle = styled.h2`
  margin-bottom: 2rem;
  color: #1e3a5f;
`;

const NavTabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  color: ${(props) => (props.active ? '#007bff' : '#1e3a5f')};
  border-bottom: ${(props) => (props.active ? '2px solid #007bff' : '2px solid transparent')};

  &:hover {
    color: #0056b3;
  }
`;

const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #1e3a5f;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FileInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ImagePreview = styled.img`
  margin-top: 1rem;
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const AddButton = styled.button`
  padding: 0.5rem;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

const SystemSettingsPage = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [headerImage, setHeaderImage] = useState(null);
  const [logo, setLogo] = useState(null);
  const [serviceImage, setServiceImage] = useState(null);
  const [services, setServices] = useState([{ name: '', description: '', image: null }]);
  const [works, setWorks] = useState([{ name: '', description: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    let endpoint = '';

    switch (activeTab) {
      case 'home':
        if (headerImage) formData.append('headerImage', headerImage);
        if (logo) formData.append('logo', logo);
        formData.append('tagline', e.target.tagline.value);
        endpoint = '/api/home-settings';
        break;
      case 'services':
        formData.append('services', JSON.stringify(services));
        endpoint = '/api/services';
        break;
      case 'works':
        formData.append('works', JSON.stringify(works));
        endpoint = '/api/works';
        break;
      case 'about':
        formData.append('setting1', e.target.setting1.value);
        formData.append('setting2', e.target.setting2.value);
        endpoint = '/api/about';
        break;
      case 'contact':
        formData.append('setting1', e.target.setting1.value);
        formData.append('setting2', e.target.setting2.value);
        endpoint = '/api/contact';
        break;
      default:
        return;
    }

    try {
      await axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Settings saved successfully');
    } catch (error) {
      console.error('Error saving settings', error);
      alert('Failed to save settings');
    }
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleServiceChange = (index, field, value) => {
    const newServices = [...services];
    newServices[index][field] = value;
    setServices(newServices);
  };

  const handleServiceImageChange = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newServices = [...services];
        newServices[index].image = reader.result;
        setServices(newServices);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddService = () => {
    setServices([...services, { name: '', description: '', image: null }]);
  };

  const handleWorkChange = (index, field, value) => {
    const newWorks = [...works];
    newWorks[index][field] = value;
    setWorks(newWorks);
  };

  const handleAddWork = () => {
    setWorks([...works, { name: '', description: '' }]);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <SettingsForm onSubmit={handleSubmit}>
            <InputWrapper>
              <Label>Upload Header Image</Label>
              <FileInput type="file" accept="image/*" onChange={(e) => handleImageChange(e, setHeaderImage)} />
              {headerImage && <ImagePreview src={headerImage} alt="Header Preview" />}
            </InputWrapper>
            <InputWrapper>
              <Label>Upload Logo</Label>
              <FileInput type="file" accept="image/*" onChange={(e) => handleImageChange(e, setLogo)} />
              {logo && <ImagePreview src={logo} alt="Logo Preview" />}
            </InputWrapper>
            <InputWrapper>
              <Label>Tagline</Label>
              <Input type="text" name="tagline" placeholder="Tagline" required />
            </InputWrapper>
            <Button type="submit">Save Settings</Button>
          </SettingsForm>
        );
      case 'services':
        return (
          <SettingsForm onSubmit={handleSubmit}>
            {services.map((service, index) => (
              <div key={index}>
                <InputWrapper>
                  <Label>Service Name</Label>
                  <Input
                    type="text"
                    placeholder="Service Name"
                    value={service.name}
                    onChange={(e) => handleServiceChange(index, 'name', e.target.value)}
                    required
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Service Description</Label>
                  <Input
                    type="text"
                    placeholder="Service Description"
                    value={service.description}
                    onChange={(e) => handleServiceChange(index, 'description', e.target.value)}
                    required
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Upload Service Image</Label>
                  <FileInput
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleServiceImageChange(index, e)}
                  />
                  {service.image && <ImagePreview src={service.image} alt="Service Preview" />}
                </InputWrapper>
              </div>
            ))}
            <AddButton type="button" onClick={handleAddService}>
              Add Service
            </AddButton>
            <Button type="submit">Save Settings</Button>
          </SettingsForm>
        );
      case 'works':
        return (
          <SettingsForm onSubmit={handleSubmit}>
            {works.map((work, index) => (
              <div key={index}>
                <InputWrapper>
                  <Label>Work Name</Label>
                  <Input
                    type="text"
                    placeholder="Work Name"
                    value={work.name}
                    onChange={(e) => handleWorkChange(index, 'name', e.target.value)}
                    required
                  />
                </InputWrapper>
                <InputWrapper>
                  <Label>Work Description</Label>
                  <Input
                    type="text"
                    placeholder="Work Description"
                    value={work.description}
                    onChange={(e) => handleWorkChange(index, 'description', e.target.value)}
                    required
                  />
                </InputWrapper>
              </div>
            ))}
            <AddButton type="button" onClick={handleAddWork}>
              Add Work
            </AddButton>
            <Button type="submit">Save Settings</Button>
          </SettingsForm>
        );
      case 'about':
        return (
          <SettingsForm onSubmit={handleSubmit}>
            <InputWrapper>
              <Label>About Us Setting 1</Label>
              <Input type="text" name="setting1" placeholder="About Us Setting 1" required />
            </InputWrapper>
            <InputWrapper>
              <Label>About Us Setting 2</Label>
              <Input type="text" name="setting2" placeholder="About Us Setting 2" required />
            </InputWrapper>
            <Button type="submit">Save Settings</Button>
          </SettingsForm>
        );
      case 'contact':
        return (
          <SettingsForm onSubmit={handleSubmit}>
            <InputWrapper>
              <Label>Contact Setting 1</Label>
              <Input type="text" name="setting1" placeholder="Contact Setting 1" required />
            </InputWrapper>
            <InputWrapper>
              <Label>Contact Setting 2</Label>
              <Input type="text" name="setting2" placeholder="Contact Setting 2" required />
            </InputWrapper>
            <Button type="submit">Save Settings</Button>
          </SettingsForm>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PageTitle>System Settings</PageTitle>
        <NavTabs>
          <Tab active={activeTab === 'home'} onClick={() => setActiveTab('home')}>Home</Tab>
          <Tab active={activeTab === 'services'} onClick={() => setActiveTab('services')}>Services</Tab>
          <Tab active={activeTab === 'works'} onClick={() => setActiveTab('works')}>Works</Tab>
          <Tab active={activeTab === 'about'} onClick={() => setActiveTab('about')}>About Us</Tab>
          <Tab active={activeTab === 'contact'} onClick={() => setActiveTab('contact')}>Contact</Tab>
        </NavTabs>
        {renderContent()}
      </MainContent>
    </Container>
  );
};

export default SystemSettingsPage;
