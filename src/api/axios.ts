import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '//universities.hipolabs.com',
});

export default axiosInstance;