// API Configuration
const API_BASE_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_API_BASE_URL || 'https://asdp-g3cm.onrender.com/')  // Production - Deployed backend
  : ''; // Development - uses Vite proxy (empty string means same origin)

// Debug logging for deployment troubleshooting
if (import.meta.env.PROD) {
  console.log('Production mode - API URL:', API_BASE_URL);
  console.log('Environment variables:', {
    VITE_API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
    PROD: import.meta.env.PROD
  });
} else {
  console.log('Development mode - using proxy');
}

export { API_BASE_URL };
