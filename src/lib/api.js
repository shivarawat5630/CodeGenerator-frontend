import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle auth errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  signup: (data) => api.post('api/auth/signup', data),
  login: (data) => api.post('api/auth/login', data),
  getMe: () => api.get('api/auth/me'),
  forgotPassword: (data) => api.post('api/auth/forgot-password', data),
  resetPassword: (data) => api.post('api/auth/reset-password', data),
};

// AI Generation API
export const aiAPI = {
  generate: (data) => api.post('api/generate', data),
};

// Export API
export const exportAPI = {
  download: (id) => api.get(`api/export/download/${id}`, { responseType: 'blob' }),
};

// Session API
export const sessionAPI = {
  checkSession: () => api.get('api/session/check'),
};

export default api;

