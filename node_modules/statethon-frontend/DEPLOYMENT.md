# Frontend Deployment Guide

This frontend is configured to work with the deployed backend at: `https://asdp-g3cm.onrender.com/`

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Connect your GitHub repository
   - Set build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Environment Variables** (if needed):
   - Add any environment variables in Netlify dashboard

3. **Deploy**:
   ```bash
   cd frontend
   npm run deploy:netlify
   ```

### Option 2: Vercel

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration

2. **Deploy**:
   ```bash
   cd frontend
   npm run deploy:vercel
   ```

### Option 3: GitHub Pages

1. **Build the project**:
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   - Go to repository Settings > Pages
   - Set source to GitHub Actions
   - Push to trigger deployment

## Configuration

The frontend is already configured to:
- ✅ Point to your deployed backend at `https://asdp-g3cm.onrender.com/`
- ✅ Handle client-side routing properly
- ✅ Include security headers
- ✅ Optimize for production builds

## Testing Before Deployment

1. **Test locally with production config**:
   ```bash
   cd frontend
   npm run build
   npm run preview
   ```

2. **Verify API connectivity**:
   - Check that the app can connect to your backend
   - Test login/logout functionality
   - Verify all features work correctly

## Post-Deployment

After deployment, verify:
- ✅ Frontend loads correctly
- ✅ Can connect to backend API
- ✅ Authentication works
- ✅ All features function properly
- ✅ Mobile responsiveness

## Troubleshooting

If you encounter issues:
1. Check browser console for errors
2. Verify backend URL is correct in `src/config.js`
3. Ensure CORS is properly configured on backend
4. Check network tab for API call failures
