// src/pages/admin/reports/DataVisualizationPage.js

import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import Sidebar from '../../../components/admin/Sidebar';

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

const ChartContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const DataVisualizationPage = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PageTitle>Data Visualization</PageTitle>
        <ChartContainer>
          <Bar data={data} options={options} />
        </ChartContainer>
      </MainContent>
    </Container>
  );
};

export default DataVisualizationPage;
