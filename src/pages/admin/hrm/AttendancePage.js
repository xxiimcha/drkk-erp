import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchAttendanceRecords } from '../../../services/hrmService';
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

const AttendanceList = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const AttendanceItem = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const AttendancePage = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  useEffect(() => {
    const fetchAttendanceData = async () => {
      const response = await fetchAttendanceRecords();
      setAttendanceRecords(response.data);
    };

    fetchAttendanceData();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <AttendanceList>
          <Title>Attendance and Time Tracking</Title>
          {attendanceRecords.map((record) => (
            <AttendanceItem key={record._id}>
              {record.employeeName}: {record.date} - {record.status}
            </AttendanceItem>
          ))}
        </AttendanceList>
      </MainContent>
    </Container>
  );
};

export default AttendancePage;
