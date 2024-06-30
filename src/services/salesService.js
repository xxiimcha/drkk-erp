// frontend/src/services/salesService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getAllQuotations = async () => {
  return await axios.get(`${API_URL}/quotations`);
};

export const createQuotation = async (quotation) => {
  return await axios.post(`${API_URL}/quotations/add`, quotation);
};

export const getAllOrders = async () => {
  return await axios.get(`${API_URL}/orders`);
};

export const createOrder = async (order) => {
  return await axios.post(`${API_URL}/orders/add`, order);
};

export const getAllPayments = async () => {
  return await axios.get(`${API_URL}/payments`);
};

export const createPayment = async (payment) => {
  return await axios.post(`${API_URL}/payments/add`, payment);
};
