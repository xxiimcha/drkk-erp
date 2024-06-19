// src/AppContent.js

import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import ServicesPage from './pages/ServicesPage';
import WorksPage from './pages/WorksPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreateAccountPage from './pages/CreateAccountPage';
import CustomerListPage from './pages/admin/crm/CustomerListPage';
import ServiceRequestPage from './pages/admin/crm/ServiceRequestPage';
import ServiceLevelAgreementPage from './pages/admin/crm/ServiceLevelAgreementPage';
import CommunicationHistoryPage from './pages/admin/crm/CommunicationHistoryPage';
import CustomerFeedbackPage from './pages/admin/crm/CustomerFeedbackPage';
import TaskManagementPage from './pages/admin/projectManagement/TaskManagementPage';
import ResourceAllocationPage from './pages/admin/projectManagement/ResourceAllocationPage';
import DiscussionBoardPage from './pages/admin/projectManagement/DiscussionBoardPage';

const AppContent = ({ openModal }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPage && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage openModal={openModal} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/crm/customers" element={<CustomerListPage />} />
        <Route path="/crm/service-requests" element={<ServiceRequestPage />} />
        <Route path="/crm/slas" element={<ServiceLevelAgreementPage />} />
        <Route path="/crm/messages" element={<CommunicationHistoryPage />} />
        <Route path="/crm/feedback" element={<CustomerFeedbackPage />} />
        <Route path="/projectManagement/tasks" element={<TaskManagementPage />} />
        <Route path="/projectManagement/resource-allocation" element={<ResourceAllocationPage />} />
        <Route path="/projectManagement/discussion" element={<DiscussionBoardPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
};

export default AppContent;