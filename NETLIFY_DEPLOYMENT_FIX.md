# 🔧 Netlify Deployment Fix Guide

## **Current Issue**
Frontend deployed at [https://68a875c9e09cc10e2f2fe23f--asdp-frontend.netlify.app](https://68a875c9e09cc10e2f2fe23f--asdp-frontend.netlify.app) is not working properly.

## **Root Cause Analysis**

### **1. Netlify Configuration Issues**
- Incorrect `publish` path in `netlify.toml`
- Missing environment variables
- Build command issues

### **2. API Connection Issues**
- Frontend can't connect to backend at `https://asdp-g3cm.onrender.com`
- CORS configuration problems
- Environment variable not set properly

## **🔧 Quick Fixes**

### **Step 1: Fix Netlify Configuration**

**Option A: Use Root-level Configuration**
```toml
# netlify.toml (in root directory)
[build]
  base = "."
  publish = "frontend/dist"
  command = "cd frontend && npm install && npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Option B: Fix Frontend Configuration**
```toml
# frontend/netlify.toml
[build]
  base = "frontend"
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
```

### **Step 2: Set Environment Variables in Netlify**

Go to your Netlify dashboard → Site settings → Environment variables:

```
VITE_API_BASE_URL=https://asdp-g3cm.onrender.com
NODE_ENV=production
```

### **Step 3: Update API Configuration**

```javascript
// frontend/src/config.js
const API_BASE_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_API_BASE_URL || 'https://asdp-g3cm.onrender.com')
  : '';

console.log('API URL:', API_BASE_URL); // Debug logging
```

### **Step 4: Test Backend Connection**

```bash
# Test backend health
curl https://asdp-g3cm.onrender.com/healthz

# Test API endpoint
curl https://asdp-g3cm.onrender.com/test
```

## **🚀 Deployment Steps**

### **1. Local Build Test**
```bash
cd frontend
npm run build
ls -la dist/
```

### **2. Deploy to Netlify**
```bash
# Option A: Git-based deployment
git add .
git commit -m "Fix Netlify deployment"
git push origin main

# Option B: Manual deployment
netlify deploy --prod --dir=frontend/dist
```

### **3. Verify Deployment**
1. Check Netlify build logs
2. Test the deployed URL
3. Check browser console for errors
4. Test API connections

## **🔍 Troubleshooting**

### **Common Issues & Solutions**

#### **Issue 1: Build Fails**
**Solution:**
```bash
# Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### **Issue 2: API Connection Fails**
**Solution:**
1. Check CORS in backend
2. Verify API URL in frontend
3. Test backend health endpoint

#### **Issue 3: Routing Issues**
**Solution:**
- Ensure `_redirects` file or `netlify.toml` redirects are correct
- Check for SPA routing configuration

#### **Issue 4: Environment Variables Not Working**
**Solution:**
1. Set in Netlify dashboard
2. Use `VITE_` prefix for Vite
3. Rebuild after setting variables

## **📋 Deployment Checklist**

- [ ] Netlify configuration is correct
- [ ] Environment variables are set
- [ ] Build command works locally
- [ ] Backend is accessible
- [ ] CORS is configured properly
- [ ] API endpoints are working
- [ ] Frontend can connect to backend
- [ ] All routes work correctly

## **🔗 Quick Test Commands**

```bash
# Test backend
curl -I https://asdp-g3cm.onrender.com/healthz

# Test frontend build
cd frontend && npm run build

# Test local development
npm run dev

# Deploy to Netlify
netlify deploy --prod --dir=frontend/dist
```

## **📞 Emergency Fix**

If the deployment is still broken:

1. **Revert to working version:**
```bash
git log --oneline
git checkout <working-commit>
```

2. **Manual deployment:**
```bash
cd frontend
npm run build
netlify deploy --prod --dir=dist
```

3. **Check logs:**
- Netlify build logs
- Browser console errors
- Network tab for failed requests

---

**Next Steps:**
1. Apply the configuration fixes above
2. Set environment variables in Netlify
3. Redeploy the frontend
4. Test the connection to backend
5. Verify all functionality works
