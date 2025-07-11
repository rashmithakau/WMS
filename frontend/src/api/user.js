import axios from 'axios';

const API = "http://localhost:3000/api";

export const createUser = (user) => axios.post(`${API}/user`, user);
export const loginUser = (userData) => axios.post(`${API}/user/login`, userData);
