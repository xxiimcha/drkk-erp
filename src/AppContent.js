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
import DesignTemplatesPage from './pages/admin/3dLayout/DesignTemplatesPage';
import CustomAssetsPage from './pages/admin/3dLayout/CustomAssetsPage';
import DesignVersionControlPage from './pages/admin/3dLayout/DesignVersionControlPage';
import StockManagementPage from './pages/admin/inventory/StockManagementPage';
import SupplierManagementPage from './pages/admin/inventory/SupplierManagementPage';
import MaterialRequestsPage from './pages/admin/inventory/MaterialRequestsPage';
import QuotationManagementPage from './pages/admin/sales/QuotationManagementPage';
import OrderManagementPage from './pages/admin/sales/OrderManagementPage';
import PaymentProcessingPage from './pages/admin/sales/PaymentProcessingPage';
import EmployeeDatabasePage from './pages/admin/hrm/EmployeeDatabasePage';
import AttendancePage from './pages/admin/hrm/AttendancePage';
import PayrollPage from './pages/admin/hrm/PayrollPage';
import LeaveManagementPage from './pages/admin/hrm/LeaveManagementPage';
import AddEmployeePage from './pages/admin/hrm/AddEmployeePage';
import SalesReportPage from './pages/admin/reports/SalesReportPage';
import EmployeeReportPage from './pages/admin/reports/EmployeeReportPage';
import DataVisualizationPage from './pages/admin/reports/DataVisualizationPage';

const AppContent = ({ openModal }) => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin') || location.pathname.startsWith('/inventory') || location.pathname.startsWith('/3dLayout') || location.pathname.startsWith('/projectManagement') || location.pathname.startsWith('/crm') || location.pathname.startsWith('/hrm') || location.pathname.startsWith('/reporting');

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
        <Route path="/3dLayout/templates" element={<DesignTemplatesPage />} />
        <Route path="/3dLayout/assets" element={<CustomAssetsPage />} />
        <Route path="/3dLayout/version-control" element={<DesignVersionControlPage />} />
        <Route path="/inventory/stock" element={<StockManagementPage />} />
        <Route path="/inventory/supplier" element={<SupplierManagementPage />} />
        <Route path="/inventory/material-requests" element={<MaterialRequestsPage />} />
        <Route path="/sales/quotations" element={<QuotationManagementPage />} />
        <Route path="/sales/orders" element={<OrderManagementPage />} />
        <Route path="/sales/payments" element={<PaymentProcessingPage />} />
        <Route path="/hrm/employees" element={<EmployeeDatabasePage />} />
        <Route path="/hrm/attendance" element={<AttendancePage />} />
        <Route path="/hrm/payroll" element={<PayrollPage />} />
        <Route path="/hrm/leave" element={<LeaveManagementPage />} />
        <Route path="/hrm/add-employee" element={<AddEmployeePage />} />
        <Route path="/reporting/sales-report" element={<SalesReportPage />} />
        <Route path="/reporting/employee-report" element={<EmployeeReportPage />} />
        <Route path="/reporting/data-visualization" element={<DataVisualizationPage />} />
      </Routes>
    </>
  );
};

export default AppContent;
