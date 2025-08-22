// API Configuration
const API_BASE_URL = import.meta.env.PROD 
  ? ''  // Production - same domain, no proxy needed
  : ''; // Development - uses Vite proxy

export { API_BASE_URL };
