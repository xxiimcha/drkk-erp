// frontend/src/pages/admin/3dLayout/CustomAssetsPage.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllCustomAssets, createCustomAsset } from '../../../services/customAssetService';
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

const AssetList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const AssetItem = styled.div`
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

const CustomAssetsPage = () => {
  const [assets, setAssets] = useState([]);
  const [newAsset, setNewAsset] = useState({ name: '', type: '', properties: {} });

  useEffect(() => {
    const fetchAssets = async () => {
      const response = await getAllCustomAssets();
      setAssets(response.data);
    };

    fetchAssets();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAsset({ ...newAsset, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCustomAsset(newAsset);
    const response = await getAllCustomAssets();
    setAssets(response.data);
    setNewAsset({ name: '', type: '', properties: {} });
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <AssetList>
          {assets.map((asset) => (
            <AssetItem key={asset._id}>
              {asset.name}
            </AssetItem>
          ))}
        </AssetList>
        <ContentWrapper>
          <Title>Custom Assets</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={newAsset.name}
              onChange={handleChange}
              placeholder="Asset Name"
              required
            />
            <Input
              type="text"
              name="type"
              value={newAsset.type}
              onChange={handleChange}
              placeholder="Asset Type"
              required
            />
            <Button type="submit">Create Asset</Button>
          </Form>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default CustomAssetsPage;
