import { authAPI } from './api';

// Check if user is authenticated
export const isAuthenticated = () => {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('token');
};

// Get current user from localStorage
export const getCurrentUser = () => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Get auth token
export const getToken = () => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
};

// Set auth data
export const setAuthData = (token, user) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
};

// Clear auth data
export const clearAuthData = () => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Login function
export const login = async (email, password) => {
  try {
    const response = await authAPI.login({ email, password });
    const { token, user } = response.data;
    setAuthData(token, user);
    return { success: true, user };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

// Signup function
export const signup = async (email, password) => {
  try {
    const response = await authAPI.signup({ email, password });
    return { success: true, message: response.data.message };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Signup failed');
  }
};

// Logout function
export const logout = () => {
  clearAuthData();
  window.location.href = '/login';
};

// Forgot password function
export const forgotPassword = async (email) => {
  try {
    const response = await authAPI.forgotPassword({ email });
    return { success: true, message: response.data.message };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to send reset email');
  }
};

// Reset password function
export const resetPassword = async (email, otp, newPassword) => {
  try {
    const response = await authAPI.resetPassword({ email, otp, newPassword });
    return { success: true, message: response.data.message };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to reset password');
  }
};
