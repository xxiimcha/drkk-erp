import axios from 'axios';

const API_URL = 'http://localhost:5000/messages';

const getAllConversations = () => {
  return axios.get(`${API_URL}/conversations`);
};

const getAllMessages = (conversationId) => {
  return axios.get(`${API_URL}/${conversationId}`);
};

const sendMessage = (conversationId, message) => {
  return axios.post(`${API_URL}/${conversationId}/add`, message);
};

export { getAllMessages, sendMessage, getAllConversations };
