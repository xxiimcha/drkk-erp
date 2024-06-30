// src/pages/admin/inventory/StockManagementPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllStocks } from '../../../services/inventoryService';
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

const StockList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const StockItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const StockManagementPage = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStocks = async () => {
      const response = await getAllStocks();
      setStocks(response.data);
    };

    fetchStocks();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <StockList>
          <Title>Stock Management</Title>
          {stocks.map((stock) => (
            <StockItem key={stock._id}>
              {stock.name}: {stock.quantity}
            </StockItem>
          ))}
        </StockList>
      </MainContent>
    </Container>
  );
};

export default StockManagementPage;
