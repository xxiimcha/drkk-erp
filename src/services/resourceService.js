import axios from 'axios';

const API_URL = 'http://localhost:5000/resource-allocations'; // Adjust the URL based on your backend

const getResourceAllocations = () => {
  return axios.get(API_URL);
};

const assignResource = (data) => {
  return axios.post(API_URL, data);
};

export { getResourceAllocations, assignResource };
