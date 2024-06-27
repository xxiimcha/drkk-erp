// frontend/src/services/designTemplateService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/design-templates';

export const getAllDesignTemplates = () => {
  return axios.get(API_URL);
};

export const createDesignTemplate = (template) => {
  return axios.post(`${API_URL}/add`, template);
};
