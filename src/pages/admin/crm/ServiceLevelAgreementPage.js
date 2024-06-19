import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAllSLAs, addSLA } from '../../../services/slaService';
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
`;

const ContentWrapper = styled.div`
  padding: 2rem;
  background-color: #f0f0f0;
  min-height: 100vh;
  border-radius: 10px;
`;

const Title = styled.h2`
  text-align: center;
  color: #1e3a5f;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
`;

const Th = styled.th`
  padding: 1rem;
  background-color: #1e3a5f;
  color: #fff;
`;

const Td = styled.td`
  padding: 1rem;
  border: 1px solid #ccc;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #1e3a5f;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
`;

const ServiceLevelAgreementPage = () => {
  const [slas, setSLAs] = useState([]);
  const [formData, setFormData] = useState({
    customerName: '',
    agreementDetails: '',
    effectiveDate: '',
    expirationDate: ''
  });

  useEffect(() => {
    const fetchSLAs = async () => {
      try {
        const response = await getAllSLAs();
        setSLAs(response.data);
      } catch (error) {
        console.error('Error fetching SLAs:', error);
      }
    };

    fetchSLAs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addSLA(formData);
      setFormData({ customerName: '', agreementDetails: '', effectiveDate: '', expirationDate: '' });
      const response = await getAllSLAs();
      setSLAs(response.data);
    } catch (error) {
      console.error('Error adding SLA:', error);
    }
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <ContentWrapper>
          <Title>Service Level Agreements</Title>
          <Form onSubmit={handleSubmit}>
            <Label>Customer Name</Label>
            <Input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              required
            />
            <Label>Agreement Details</Label>
            <Input
              type="text"
              name="agreementDetails"
              value={formData.agreementDetails}
              onChange={handleChange}
              required
            />
            <Label>Effective Date</Label>
            <Input
              type="date"
              name="effectiveDate"
              value={formData.effectiveDate}
              onChange={handleChange}
              required
            />
            <Label>Expiration Date</Label>
            <Input
              type="date"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              required
            />
            <Button type="submit">Submit Agreement</Button>
          </Form>
          <Table>
            <thead>
              <tr>
                <Th>Customer Name</Th>
                <Th>Agreement Details</Th>
                <Th>Effective Date</Th>
                <Th>Expiration Date</Th>
              </tr>
            </thead>
            <tbody>
              {slas.map((sla) => (
                <tr key={sla._id}>
                  <Td>{sla.customerName}</Td>
                  <Td>{sla.agreementDetails}</Td>
                  <Td>{new Date(sla.effectiveDate).toLocaleDateString()}</Td>
                  <Td>{new Date(sla.expirationDate).toLocaleDateString()}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ContentWrapper>
      </MainContent>
    </Container>
  );
};

export default ServiceLevelAgreementPage;
