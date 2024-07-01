import axios from 'axios';

export const fetchAttendanceRecords = () => {
  return axios.get('/hrm/attendance');
};

export const fetchEmployees = () => {
  return axios.get('/hrm/employees');
};

export const fetchLeaveRequests = () => {
  return axios.get('/hrm/leave');
};

export const fetchPayrollRecords = () => {
  return axios.get('/hrm/payroll');
};

export const createEmployee = (employeeData) => {
  return axios.post('/hrm/employees', { employeeData });
};
