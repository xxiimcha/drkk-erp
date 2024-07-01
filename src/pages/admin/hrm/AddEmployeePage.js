// src/pages/admin/hrm/AddEmployeePage.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { createEmployee } from '../../../services/hrmService';
import Sidebar from '../../../components/admin/Sidebar';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to right, #1e3a5f, #3b5998); /* Gradient background */
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background: linear-gradient(to right, #1e3a5f, #3b5998); /* Match sidebar background color */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  margin-top: 1rem;
  color: #1e3a5f;
  border-bottom: 2px solid #1e3a5f;
  padding-bottom: 0.5rem;
`;

const FormSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1rem;
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
`;

const BackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #6c757d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.875rem;
`;

const AddEmployeePage = () => {
  const [employeeData, setEmployeeData] = useState({
    fullName: '',
    address: '',
    homePhone: '',
    alternatePhone: '',
    email: '',
    ssnOrGovId: '',
    birthDate: '',
    maritalStatus: '',
    spouseName: '',
    spouseEmployer: '',
    spouseWorkPhone: '',
    jobTitle: '',
    employeeId: '',
    supervisor: '',
    department: '',
    workLocation: '',
    workEmail: '',
    workPhone: '',
    cellPhone: '',
    startDate: '',
    salary: '',
    emergencyContactName: '',
    emergencyContactAddress: '',
    emergencyContactPhone: '',
    emergencyContactRelationship: '',
    sss: '',
    pagibig: '',
    tin: '',
    gsis: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEmployee(employeeData);
    // Redirect or show success message
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <BackButton onClick={() => navigate('/hrm/employees')}>Go Back</BackButton>
        <FormWrapper>
          <Title>Add New Employee</Title>
          <form onSubmit={handleSubmit}>
            <SectionTitle>Personal Information</SectionTitle>
            <FormSection>
              <Input type="text" name="fullName" value={employeeData.fullName} onChange={handleChange} placeholder="Full Name" required />
              <Input type="text" name="address" value={employeeData.address} onChange={handleChange} placeholder="Address" required />
              <Input type="text" name="homePhone" value={employeeData.homePhone} onChange={handleChange} placeholder="Home Phone" required />
              <Input type="text" name="alternatePhone" value={employeeData.alternatePhone} onChange={handleChange} placeholder="Alternate Phone" />
              <Input type="email" name="email" value={employeeData.email} onChange={handleChange} placeholder="Email" required />
              <Input type="text" name="ssnOrGovId" value={employeeData.ssnOrGovId} onChange={handleChange} placeholder="SSN or Gov't ID" required />
              <Input type="date" name="birthDate" value={employeeData.birthDate} onChange={handleChange} placeholder="Birth Date" required />
              <Dropdown name="maritalStatus" value={employeeData.maritalStatus} onChange={handleChange} required>
                <option value="">Select Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </Dropdown>
              <Input type="text" name="spouseName" value={employeeData.spouseName} onChange={handleChange} placeholder="Spouse's Name" />
              <Input type="text" name="spouseEmployer" value={employeeData.spouseEmployer} onChange={handleChange} placeholder="Spouse's Employer" />
              <Input type="text" name="spouseWorkPhone" value={employeeData.spouseWorkPhone} onChange={handleChange} placeholder="Spouse's Work Phone" />
            </FormSection>

            <SectionTitle>Job Information</SectionTitle>
            <FormSection>
              <Input type="text" name="jobTitle" value={employeeData.jobTitle} onChange={handleChange} placeholder="Job Title" required />
              <Input type="text" name="employeeId" value={employeeData.employeeId} onChange={handleChange} placeholder="Employee ID" required />
              <Input type="text" name="supervisor" value={employeeData.supervisor} onChange={handleChange} placeholder="Supervisor" />
              <Dropdown name="department" value={employeeData.department} onChange={handleChange} required>
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
                <option value="Operations">Operations</option>
              </Dropdown>
              <Input type="text" name="workLocation" value={employeeData.workLocation} onChange={handleChange} placeholder="Work Location" />
              <Input type="email" name="workEmail" value={employeeData.workEmail} onChange={handleChange} placeholder="Work Email" required />
              <Input type="text" name="workPhone" value={employeeData.workPhone} onChange={handleChange} placeholder="Work Phone" />
              <Input type="text" name="cellPhone" value={employeeData.cellPhone} onChange={handleChange} placeholder="Cell Phone" />
              <Input type="date" name="startDate" value={employeeData.startDate} onChange={handleChange} placeholder="Start Date" required />
              <Input type="number" name="salary" value={employeeData.salary} onChange={handleChange} placeholder="Salary" required />
              <Input type="text" name="sss" value={employeeData.sss} onChange={handleChange} placeholder="SSS (optional)" />
              <Input type="text" name="pagibig" value={employeeData.pagibig} onChange={handleChange} placeholder="Pagibig (optional)" />
              <Input type="text" name="tin" value={employeeData.tin} onChange={handleChange} placeholder="TIN (optional)" />
              <Input type="text" name="gsis" value={employeeData.gsis} onChange={handleChange} placeholder="GSIS (optional)" />
            </FormSection>

            <SectionTitle>Emergency Contact Information</SectionTitle>
            <FormSection>
              <Input type="text" name="emergencyContactName" value={employeeData.emergencyContactName} onChange={handleChange} placeholder="Full Name" required />
              <Input type="text" name="emergencyContactAddress" value={employeeData.emergencyContactAddress} onChange={handleChange} placeholder="Address" required />
              <Input type="text" name="emergencyContactPhone" value={employeeData.emergencyContactPhone} onChange={handleChange} placeholder="Primary Phone" required />
              <Input type="text" name="emergencyContactRelationship" value={employeeData.emergencyContactRelationship} onChange={handleChange} placeholder="Relationship" required />
            </FormSection>
            <Button type="submit">Add Employee</Button>
          </form>
        </FormWrapper>
      </MainContent>
    </Container>
  );
};

export default AddEmployeePage;
