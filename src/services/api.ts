import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const authAPI = {
  signup: async (data: { name: string; email: string; password: string }) => {
    const response = await api.post('/signup', data);
    return response.data;
  },
  
  login: async (data: { email: string; password: string }) => {
    const response = await api.post('/login', data);
    return response.data;
  },
};

// Menu APIs
export const menuAPI = {
  getAll: async () => {
    const response = await api.get('/menu');
    return response.data;
  },
};

// Admin APIs
export const adminAPI = {
  addItem: async (data: { name: string; price: number; description: string }) => {
    const response = await api.post('/admin/add-item', data);
    return response.data;
  },
  
  updateItem: async (id: string, data: { name: string; price: number; description: string }) => {
    const response = await api.put(`/admin/update-item/${id}`, data);
    return response.data;
  },
  
  deleteItem: async (id: string) => {
    const response = await api.delete(`/admin/delete-item/${id}`);
    return response.data;
  },
};

// Contact API
export const contactAPI = {
  submit: async (data: { name: string; email: string; message: string }) => {
    const response = await api.post('/contact', data);
    return response.data;
  },
};

export default api;
