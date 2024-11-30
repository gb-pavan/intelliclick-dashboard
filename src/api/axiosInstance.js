import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://intelliclick-server-dev-1082184296521.us-central1.run.app', // Replace with your API base URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzNmM2MyMTYwMjgzMmQ1ZDU5NmM4NmEiLCJyb2xlIjoiQkRBIiwibW9kZXJhdG9yIjpmYWxzZSwiZW1haWwiOiJ0ZXN0LnN0dWRlbnRAZ21haWwuY29tIiwibmFtZSI6IlRlc3QgQkRBIiwiaWF0IjoxNzMyOTY2MjgxfQ.p9ki2pDitH0dzT0zAT-S-GRQP_g4eRaIl0ETRVQVWHI",
  },
});

export default axiosInstance;
