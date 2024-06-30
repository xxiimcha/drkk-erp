// frontend/src/pages/admin/inventory/SupplierManagementPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllSuppliers } from '../../../services/inventoryService';
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

const SupplierList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const SupplierItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const SupplierManagementPage = () => {
  const [suppliers, setSuppliers] = useState([]);

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await getAllSuppliers();
      setSuppliers(response.data);
    };

    fetchSuppliers();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <SupplierList>
          <Title>Supplier Management</Title>
          {suppliers.map((supplier) => (
            <SupplierItem key={supplier._id}>
              {supplier.name}: {supplier.contactInfo}
            </SupplierItem>
          ))}
        </SupplierList>
      </MainContent>
    </Container>
  );
};

export default SupplierManagementPage;
