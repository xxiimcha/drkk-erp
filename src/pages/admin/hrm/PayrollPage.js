import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPayrollRecords } from '../../../services/hrmService';
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

const PayrollList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const PayrollItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const PayrollPage = () => {
  const [payrollRecords, setPayrollRecords] = useState([]);

  useEffect(() => {
    const fetchPayrollData = async () => {
      const response = await fetchPayrollRecords();
      setPayrollRecords(response.data);
    };

    fetchPayrollData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <PayrollList>
          <Title>Payroll Management</Title>
          {payrollRecords.map((record) => (
            <PayrollItem key={record._id}>
              {record.employeeName}: {record.amount} - {record.date}
            </PayrollItem>
          ))}
        </PayrollList>
      </MainContent>
    </Container>
  );
};

export default PayrollPage;
