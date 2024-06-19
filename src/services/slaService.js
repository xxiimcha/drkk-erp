import axios from 'axios';

const API_URL = 'http://localhost:5000/slas';

const getAllSLAs = () => {
  return axios.get(API_URL);
};

const addSLA = (sla) => {
  return axios.post(`${API_URL}/add`, sla);
};

export { getAllSLAs, addSLA };
