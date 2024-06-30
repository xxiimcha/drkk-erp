// frontend/src/pages/admin/3dLayout/DesignTemplatesPage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllDesignTemplates, createDesignTemplate } from '../../../services/designTemplateService';
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

const TemplateList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const TemplateItem = styled.div`
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

const FileInput = styled.input`
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

const DesignTemplatesPage = () => {
  const [templates, setTemplates] = useState([]);
  const [newTemplate, setNewTemplate] = useState({ name: '', description: '', customizationOptions: [] });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      const response = await getAllDesignTemplates();
      setTemplates(response.data);
    };

    fetchTemplates();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTemplate({ ...newTemplate, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', newTemplate.name);
    formData.append('description', newTemplate.description);
    formData.append('customizationOptions', JSON.stringify(newTemplate.customizationOptions));
    if (file) {
      formData.append('file', file);
    }

    await createDesignTemplate(formData);
    const response = await getAllDesignTemplates();
    setTemplates(response.data);
    setNewTemplate({ name: '', description: '', customizationOptions: [] });
    setFile(null);
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <TemplateList>
          {templates.map((template) => (
            <TemplateItem key={template._id}>
              {template.name}
            </TemplateItem>
          ))}
        </TemplateList>
        <ContentWrapper>
          <Title>Design Templates</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={newTemplate.name}
              onChange={handleChange}
              placeholder="Template Name"
              required
            />
            <Input
              type="text"
              name="description"
              value={newTemplate.description}
              onChange={handleChange}
              placeholder="Template Description"
              required
            />
            <FileInput
              type="file"
              name="file"
              onChange={handleFileChange}
              accept=".dwg"
              required
            />
            <Button type="submit">Create Template</Button>
          </Form>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default DesignTemplatesPage;
