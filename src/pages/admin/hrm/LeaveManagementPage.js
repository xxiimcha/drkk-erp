import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchLeaveRequests } from '../../../services/hrmService';
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

const LeaveList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const LeaveItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const LeaveManagementPage = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    const fetchLeaveData = async () => {
      const response = await fetchLeaveRequests();
      setLeaveRequests(response.data);
    };

    fetchLeaveData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <LeaveList>
          <Title>Leave Management</Title>
          {leaveRequests.map((request) => (
            <LeaveItem key={request._id}>
              {request.employeeName}: {request.startDate} - {request.endDate}
            </LeaveItem>
          ))}
        </LeaveList>
      </MainContent>
    </Container>
  );
};

export default LeaveManagementPage;
