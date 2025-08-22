// API Configuration
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://asdp-fba8.onrender.com'  // Production - Render backend
  : ''; // Development - uses Vite proxy

export { API_BASE_URL };
