// src/services/taskService.js

import axios from 'axios';

const API_URL = 'http://localhost:5000/tasks'; // Adjust the URL based on your backend

const getTasks = () => {
  return axios.get(API_URL);
};

export { getTasks };
