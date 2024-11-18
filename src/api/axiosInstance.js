import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://intelliclick-server-dev-1082184296521.us-central1.run.app', // Replace with your API base URL
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    "Authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzI0ODZjMDA2NmU3ZWUzMzFiZDJhN2UiLCJyb2xlIjoiQkRBIiwibW9kZXJhdG9yIjpmYWxzZSwiZW1haWwiOiJiaXJhZy5ncHRhQGdtYWlsLmNvbSIsIm5hbWUiOiJCaXJhaiIsImlhdCI6MTczMTkwNjQ2MX0.ls67j7EF2pPo3X7lU6qUlWL7--nTBq2dmikAeXm5WFo",
  },
});

export default axiosInstance;
