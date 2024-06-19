import axios from 'axios';

const API_URL = 'http://localhost:5000/discussions';

const getAllDiscussions = () => {
  return axios.get(API_URL);
};

const getDiscussionDetails = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const createDiscussion = (discussion) => {
  return axios.post(`${API_URL}/add`, discussion);
};

export { getAllDiscussions, getDiscussionDetails, createDiscussion };
