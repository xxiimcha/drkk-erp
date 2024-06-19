import axios from 'axios';

const API_URL = 'http://localhost:5000/service-requests';

const getAllServiceRequests = () => {
  return axios.get(API_URL);
};

const addServiceRequest = (serviceRequest) => {
  return axios.post(`${API_URL}/add`, serviceRequest);
};

export { getAllServiceRequests, addServiceRequest };
