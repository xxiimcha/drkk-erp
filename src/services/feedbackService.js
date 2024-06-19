import axios from 'axios';

const API_URL = 'http://localhost:5000/feedback';

const getAllFeedback = () => {
  return axios.get(API_URL);
};

const addFeedback = (feedback) => {
  return axios.post(`${API_URL}/add`, feedback);
};

export { getAllFeedback, addFeedback };
