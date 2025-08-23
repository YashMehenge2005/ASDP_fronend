# 🚀 Deployment Guide - Statethon (ASDP)

## **Quick Fix for Current Deployment Issues**

### **1. Local Development Setup**

```bash
# Clone and setup
git clone <your-repo>
cd Statethon-Copy

# Install dependencies
npm run install-all

# Start backend (in one terminal)
cd backend
python main.py

# Start frontend (in another terminal)
cd frontend
npm run dev
```

### **2. Production Deployment Options**

#### **Option A: Render (Recommended)**

**Backend Deployment:**
1. Connect your GitHub repo to Render
2. Use the existing `render.yaml` configuration
3. Set environment variables:
   - `SECRET_KEY`: Generate a secure key
   - `DISABLE_PLOTS`: "1" (for free tier)
   - `MAX_PLOT_ROWS`: "5000"

**Frontend Deployment:**
1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy to Netlify/Vercel or serve from Render static files

#### **Option B: Vercel (Full Stack)**

1. Update `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "backend/app.py",
      "use": "@vercel/python"
    },
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/backend/app.py"
    },
    {
      "src": "/(.*)",
      "dest": "/frontend/dist/$1"
    }
  ]
}
```

#### **Option C: Docker**

```bash
# Build and run with Docker Compose
docker-compose up --build
```

### **3. Environment Configuration**

#### **Backend Environment Variables**
```bash
SECRET_KEY=your-secure-secret-key
DISABLE_PLOTS=1
MAX_PLOT_ROWS=5000
FLASK_ENV=production
```

#### **Frontend Environment Variables**
```bash
VITE_API_BASE_URL=https://your-backend-url.com
```

### **4. Common Deployment Issues & Solutions**

#### **Issue 1: CORS Errors**
**Solution:** Update CORS origins in `backend/app.py`:
```python
CORS(app, 
     origins=[
         'http://localhost:3000',
         'http://localhost:5173',
         'https://your-frontend-domain.com'
     ])
```

#### **Issue 2: Build Failures**
**Solution:** Check Node.js version and dependencies:
```bash
# Use Node.js 18+
node --version

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### **Issue 3: API Connection Issues**
**Solution:** Verify API base URL in `frontend/src/config.js`:
```javascript
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://your-backend-url.com'
  : '';
```

#### **Issue 4: Database Issues**
**Solution:** Ensure SQLite database is writable:
```bash
# Check permissions
chmod 755 backend/
chmod 644 backend/app.db
```

### **5. Testing Deployment**

#### **Health Check**
```bash
curl https://your-backend-url.com/healthz
```

#### **API Test**
```bash
curl https://your-backend-url.com/test
```

#### **Frontend Test**
Visit your frontend URL and check browser console for errors.

### **6. Monitoring & Debugging**

#### **Backend Logs**
```bash
# Render logs
render logs --service asdp

# Local logs
tail -f backend/app.log
```

#### **Frontend Debugging**
1. Open browser DevTools
2. Check Network tab for failed requests
3. Check Console for JavaScript errors

### **7. Performance Optimization**

#### **Backend**
- Enable caching for static files
- Use connection pooling for database
- Implement rate limiting

#### **Frontend**
- Enable code splitting
- Optimize bundle size
- Use CDN for static assets

### **8. Security Checklist**

- [ ] Secure SECRET_KEY
- [ ] Enable HTTPS
- [ ] Set proper CORS origins
- [ ] Validate file uploads
- [ ] Implement rate limiting
- [ ] Use environment variables

### **9. Troubleshooting Commands**

```bash
# Check backend status
curl -I https://your-backend-url.com/healthz

# Test API endpoints
curl -X POST https://your-backend-url.com/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"admin123"}'

# Check frontend build
cd frontend
npm run build
ls -la dist/

# Verify environment
echo $NODE_ENV
echo $FLASK_ENV
```

### **10. Emergency Rollback**

If deployment fails:
1. Revert to previous commit
2. Update environment variables
3. Rebuild and redeploy
4. Test all endpoints

---

## **Quick Start Commands**

```bash
# Development
npm run dev

# Production build
npm run build

# Deploy to Render
git push origin main

# Deploy to Vercel
vercel --prod

# Deploy to Netlify
netlify deploy --prod
```

For immediate deployment issues, check the browser console and backend logs for specific error messages.
