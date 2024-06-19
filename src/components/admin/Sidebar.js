import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaChevronDown, FaChevronRight, FaBars } from 'react-icons/fa';
import { AiFillDashboard, AiOutlineProject, AiOutlineFile, AiOutlineSetting, AiOutlineUser, AiOutlineLineChart, AiOutlineFileSearch, AiOutlineCalendar } from 'react-icons/ai';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #1e3a5f;
  color: #fff;
  padding: 1rem;
  font-size: 0.9rem;
  transition: transform 0.3s ease-in-out;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    z-index: 1000;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1100;
    cursor: pointer;
    color: #fff;
    background-color: #1e3a5f;
    padding: 10px;
    border-radius: 5px;
  }
`;

const SidebarTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const SidebarItem = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => (props.active ? '#007bff' : '#fff')};
  &:hover {
    text-decoration: none;
  }
`;

const IconContainer = styled.div`
  margin-right: 0.5rem;
`;

const DropdownItem = styled.div`
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => (props.active ? '#007bff' : '#fff')};
  &:hover {
    text-decoration: none;
  }
`;

const Sidebar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDropdown = (item) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <HamburgerMenu onClick={toggleSidebar}>
        <FaBars size={24} />
      </HamburgerMenu>
      <SidebarContainer isOpen={sidebarOpen}>
        <SidebarTitle>DRKK Admin</SidebarTitle>
        <SidebarItem
          onClick={() => toggleDropdown('crm')}
          active={location.pathname.startsWith('/admin')}
        >
          <IconContainer>
            <AiFillDashboard />
          </IconContainer>
          CRM
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['crm'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['crm'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/crm/customers')}
              active={location.pathname === '/crm/customers'}
            >
              <IconContainer>
                <AiOutlineUser />
              </IconContainer>
              Customer Database
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/crm/service-requests')}
              active={location.pathname === '/crm/service-requests'}
            >
              <IconContainer>
                <AiOutlineFileSearch />
              </IconContainer>
              Service Requests
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/crm/slas')}
              active={location.pathname === '/crm/slas'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Service Level Agreements
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/crm/messages')}
              active={location.pathname === '/crm/messages'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Communication History
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/crm/feedback')}
              active={location.pathname === '/crm/feedback'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Customer Feedback
            </DropdownItem>
          </>
        )}
        <SidebarItem
          onClick={() => toggleDropdown('3dLayout')}
          active={location.pathname.startsWith('/3dLayout')}
        >
          <IconContainer>
            <AiOutlineFile />
          </IconContainer>
          3D Virtual Design Layout
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['3dLayout'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['3dLayout'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/3dLayout/templates')}
              active={location.pathname === '/3dLayout/templates'}
            >
              <IconContainer>
                <AiOutlineFileSearch />
              </IconContainer>
              Design Templates
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/3dLayout/assets')}
              active={location.pathname === '/3dLayout/assets'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Custom Assets
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/3dLayout/version-control')}
              active={location.pathname === '/3dLayout/version-control'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Design Version Control
            </DropdownItem>
          </>
        )}
        <SidebarItem
          onClick={() => toggleDropdown('projectManagement')}
          active={location.pathname.startsWith('/projectManagement')}
        >
          <IconContainer>
            <AiOutlineSetting />
          </IconContainer>
          Project Management
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['projectManagement'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['projectManagement'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/projectManagement/tasks')}
              active={location.pathname === '/projectManagement/tasks'}
            >
              <IconContainer>
                <AiOutlineCalendar />
              </IconContainer>
              Task Management
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/projectManagement/resource-allocation')}
              active={location.pathname === '/projectManagement/resource-allocation'}
            >
              <IconContainer>
                <AiOutlineCalendar />
              </IconContainer>
              Resource Allocation
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/projectManagement/discussion')}
              active={location.pathname === '/projectManagement/discussion'}
            >
              <IconContainer>
                <AiOutlineCalendar />
              </IconContainer>
              Discussion Board
            </DropdownItem>
          </>
        )}
        <SidebarItem
          onClick={() => toggleDropdown('inventory')}
          active={location.pathname.startsWith('/inventory')}
        >
          <IconContainer>
            <AiOutlineFile />
          </IconContainer>
          Inventory
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['inventory'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['inventory'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/inventory/stock')}
              active={location.pathname === '/inventory/stock'}
            >
              <IconContainer>
                <AiOutlineFileSearch />
              </IconContainer>
              Stock Management
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/inventory/supplier')}
              active={location.pathname === '/inventory/supplier'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Supplier Management
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/inventory/material')}
              active={location.pathname === '/inventory/material'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Material Requests and Reorder
            </DropdownItem>
          </>
        )}
        <SidebarItem
          onClick={() => toggleDropdown('salesAndBilling')}
          active={location.pathname.startsWith('/salesAndBilling')}
        >
          <IconContainer>
            <AiOutlineLineChart />
          </IconContainer>
          Sales and Billing
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['salesAndBilling'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['salesAndBilling'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/salesAndBilling/quotation')}
              active={location.pathname === '/salesAndBilling/quotation'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Quotation Management
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/salesAndBilling/order')}
              active={location.pathname === '/salesAndBilling/order'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Order Management
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/salesAndBilling/payment')}
              active={location.pathname === '/salesAndBilling/payment'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Payment Processing
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/salesAndBilling/report')}
              active={location.pathname === '/salesAndBilling/report'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Sales Reporting
            </DropdownItem>
          </>
        )}
        <SidebarItem
          onClick={() => toggleDropdown('hrm')}
          active={location.pathname.startsWith('/hrm')}
        >
          <IconContainer>
            <AiOutlineUser />
          </IconContainer>
          HRM
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['hrm'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['hrm'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/hrm/employee')}
              active={location.pathname === '/hrm/employee'}
            >
              <IconContainer>
                <AiOutlineFileSearch />
              </IconContainer>
              Employee Database
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/hrm/attendance')}
              active={location.pathname === '/hrm/attendance'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Attendance and Time Tracking
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/hrm/payroll')}
              active={location.pathname === '/hrm/payroll'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Payroll Management
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/hrm/leave')}
              active={location.pathname === '/hrm/leave'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Leave Management
            </DropdownItem>
          </>
        )}
        <SidebarItem
          onClick={() => toggleDropdown('reportingAndAnalytics')}
          active={location.pathname.startsWith('/reportingAndAnalytics')}
        >
          <IconContainer>
            <AiOutlineLineChart />
          </IconContainer>
          Reporting and Analytics
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['reportingAndAnalytics'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['reportingAndAnalytics'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/reportingAndAnalytics/sales')}
              active={location.pathname === '/reportingAndAnalytics/sales'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Sales Report
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/reportingAndAnalytics/employee')}
              active={location.pathname === '/reportingAndAnalytics/employee'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Employee Report
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/reportingAndAnalytics/data')}
              active={location.pathname === '/reportingAndAnalytics/data'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Data Visualization
            </DropdownItem>
          </>
        )}
        <SidebarItem
          onClick={() => toggleDropdown('estimationRequests')}
          active={location.pathname.startsWith('/estimationRequests')}
        >
          <IconContainer>
            <AiOutlineFileSearch />
          </IconContainer>
          Estimation Requests
          <IconContainer style={{ marginLeft: 'auto' }}>
            {dropdownOpen['estimationRequests'] ? <FaChevronDown /> : <FaChevronRight />}
          </IconContainer>
        </SidebarItem>
        {dropdownOpen['estimationRequests'] && (
          <>
            <DropdownItem
              onClick={() => navigate('/estimationRequests/request')}
              active={location.pathname === '/estimationRequests/request'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Estimation Requests
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/estimationRequests/templates')}
              active={location.pathname === '/estimationRequests/templates'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Estimation Templates
            </DropdownItem>
            <DropdownItem
              onClick={() => navigate('/estimationRequests/tracking')}
              active={location.pathname === '/estimationRequests/tracking'}
            >
              <IconContainer>
                <AiOutlineFile />
              </IconContainer>
              Tracking and Follow-up
            </DropdownItem>
          </>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
