// frontend/src/pages/admin/3dLayout/DesignVersionControlPage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllDesignVersions, createDesignVersion } from '../../../services/designVersionService';
import Sidebar from '../../../components/admin/Sidebar';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1e3a5f; /* Match sidebar background color */
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #1e3a5f; /* Match sidebar background color */
  display: flex;
  gap: 1rem;
`;

const VersionList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const VersionItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ContentWrapper = styled.div`
  flex: 3;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
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

const DesignVersionControlPage = () => {
  const [versions, setVersions] = useState([]);
  const [newVersion, setNewVersion] = useState({ version: '', description: '', changes: [] });

  useEffect(() => {
    const fetchVersions = async () => {
      const response = await getAllDesignVersions();
      setVersions(response.data);
    };

    fetchVersions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewVersion({ ...newVersion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDesignVersion(newVersion);
    const response = await getAllDesignVersions();
    setVersions(response.data);
    setNewVersion({ version: '', description: '', changes: [] });
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <VersionList>
          {versions.map((version) => (
            <VersionItem key={version._id}>
              {version.version}
            </VersionItem>
          ))}
        </VersionList>
        <ContentWrapper>
          <Title>Design Version Control</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="version"
              value={newVersion.version}
              onChange={handleChange}
              placeholder="Version"
              required
            />
            <Input
              type="text"
              name="description"
              value={newVersion.description}
              onChange={handleChange}
              placeholder="Description"
              required
            />
            <Button type="submit">Create Version</Button>
          </Form>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default DesignVersionControlPage;
