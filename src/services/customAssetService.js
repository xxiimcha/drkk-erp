// frontend/src/services/customAssetService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/custom-assets';

export const getAllCustomAssets = () => {
  return axios.get(API_URL);
};

export const createCustomAsset = (asset) => {
  return axios.post(`${API_URL}/add`, asset);
};
