// frontend/src/services/designVersionService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/design-versions';

export const getAllDesignVersions = () => {
  return axios.get(API_URL);
};

export const createDesignVersion = (version) => {
  return axios.post(`${API_URL}/add`, version);
};
