// src/pages/admin/project/TaskManagementPage.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../../../components/admin/Sidebar';
import { getTasks } from '../../../services/taskService';

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

const ContentWrapper = styled.div`
  flex: 1;
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

const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

const Th = styled.th`
  padding: 1rem;
  background-color: #1e3a5f;
  color: #fff;
  text-align: left;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
`;

const TaskRow = styled.tr`
  &:hover {
    background-color: #f0f0f0;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1rem;
  align-self: flex-end;
`;

const TaskManagementPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks();
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ContentWrapper>
          <Title>Task Management</Title>
          <Button>New Task</Button>
          <TaskTable>
            <thead>
              <tr>
                <Th>Task</Th>
                <Th>Due Date</Th>
                <Th>Stage</Th>
                <Th>Priority</Th>
                <Th>Team</Th>
                <Th>Assignee</Th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <TaskRow key={task._id}>
                  <Td>{task.name}</Td>
                  <Td>{task.dueDate}</Td>
                  <Td>{task.stage}</Td>
                  <Td>{task.priority}</Td>
                  <Td>{task.team}</Td>
                  <Td>{task.assignee}</Td>
                </TaskRow>
              ))}
            </tbody>
          </TaskTable>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default TaskManagementPage;
