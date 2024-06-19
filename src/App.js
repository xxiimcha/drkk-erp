import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent';
import LoginModal from './components/LoginModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <Router>
      <ToastContainer />
      <LoginModal isOpen={modalIsOpen} onRequestClose={closeModal} />
      <AppContent openModal={openModal} />
    </Router>
  );
};

export default App;
