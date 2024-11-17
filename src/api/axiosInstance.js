import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://intelliclick-server-dev-1082184296521.us-central1.run.app', // Replace with your API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
