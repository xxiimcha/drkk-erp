// src/services/inventoryService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your actual API URL

export const getAllMaterialRequests = async () => {
  return await axios.get(`${API_URL}/material-requests`);
};

export const createMaterialRequest = async (newRequest) => {
  return await axios.post(`${API_URL}/material-requests`, newRequest);
};

export const updateMaterialRequestStatus = async (id, status) => {
  return await axios.patch(`${API_URL}/material-requests/${id}`, { status });
};

export const getAllStocks = async () => {
  return await axios.get(`${API_URL}/stocks`);
};

export const getAllSuppliers = async () => {
  return await axios.get(`${API_URL}/suppliers`);
};
