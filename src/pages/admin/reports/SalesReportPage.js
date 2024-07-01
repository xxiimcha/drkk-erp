// src/pages/admin/reports/SalesReportPage.js

import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';
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

const SalesReportPage = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Sales Report',
        data: [10, 15, 5, 8, 12],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
        <PageTitle>Sales Report</PageTitle>
        <ChartContainer>
          <Line data={data} options={options} />
        </ChartContainer>
      </MainContent>
    </Container>
  );
};

export default SalesReportPage;
