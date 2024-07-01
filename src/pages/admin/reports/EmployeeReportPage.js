// src/pages/admin/reports/EmployeeReportPage.js

import React from 'react';
import styled from 'styled-components';
import { Pie } from 'react-chartjs-2';
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

const EmployeeReportPage = () => {
  const data = {
    labels: ['HR', 'Finance', 'IT', 'Operations'],
    datasets: [
      {
        label: 'Employee Distribution',
        data: [12, 15, 10, 8],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PageTitle>Employee Report</PageTitle>
        <ChartContainer>
          <Pie data={data} />
        </ChartContainer>
      </MainContent>
    </Container>
  );
};

export default EmployeeReportPage;
