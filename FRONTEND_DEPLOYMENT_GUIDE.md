# 🎯 Frontend-Only Deployment Guide

## **Current Status**
- ✅ **Backend**: Working at [https://asdp-g3cm.onrender.com](https://asdp-g3cm.onrender.com) - **DO NOT CHANGE**
- ❌ **Frontend**: Not working at [https://68a875c9e09cc10e2f2fe23f--asdp-frontend.netlify.app](https://68a875c9e09cc10e2f2fe23f--asdp-frontend.netlify.app)

## **🚀 Quick Fix Steps**

### **Step 1: Test Backend Connection**
Open `frontend/test-backend-connection.html` in your browser to verify the backend is accessible.

### **Step 2: Build Frontend Locally**
```bash
cd frontend
npm run build
```

### **Step 3: Deploy to Netlify**

#### **Option A: Using Netlify CLI**
```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Deploy from frontend directory
cd frontend
netlify deploy --prod --dir=dist
```

#### **Option B: Manual Upload**
1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Drag and drop the `frontend/dist` folder
3. Set environment variables (see Step 4)

#### **Option C: Git-based Deployment**
```bash
git add .
git commit -m "Fix frontend deployment"
git push origin main
```

### **Step 4: Set Environment Variables in Netlify**

Go to your Netlify site settings → Environment variables:

```
VITE_API_BASE_URL=https://asdp-g3cm.onrender.com
NODE_ENV=production
```

### **Step 5: Verify Deployment**

1. **Check the new Netlify URL**
2. **Open browser DevTools** (F12)
3. **Check Console** for any errors
4. **Check Network tab** for failed requests

## **🔧 Configuration Files**

### **Netlify Configuration (netlify.toml)**
```toml
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

### **Frontend API Configuration (frontend/src/config.js)**
```javascript
const API_BASE_URL = import.meta.env.PROD 
  ? (import.meta.env.VITE_API_BASE_URL || 'https://asdp-g3cm.onrender.com')
  : '';

export { API_BASE_URL };
```

## **🔍 Troubleshooting**

### **Common Issues**

#### **Issue 1: Build Fails**
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### **Issue 2: API Connection Fails**
- Check if backend is accessible: https://asdp-g3cm.onrender.com/healthz
- Verify environment variables in Netlify
- Check CORS configuration

#### **Issue 3: Routing Issues**
- Ensure `netlify.toml` has proper redirects
- Check for SPA routing configuration

#### **Issue 4: Environment Variables Not Working**
- Use `VITE_` prefix for Vite
- Rebuild after setting variables
- Check Netlify build logs

## **📋 Deployment Checklist**

- [ ] Backend is working (https://asdp-g3cm.onrender.com/healthz)
- [ ] Frontend builds locally (`npm run build`)
- [ ] Environment variables are set in Netlify
- [ ] Netlify configuration is correct
- [ ] New deployment URL works
- [ ] API connections work
- [ ] All routes work correctly

## **🔗 Test Commands**

```bash
# Test backend
curl https://asdp-g3cm.onrender.com/healthz

# Test frontend build
cd frontend && npm run build

# Test local development
cd frontend && npm run dev
```

## **📞 Emergency Procedures**

### **If Frontend Still Doesn't Work:**

1. **Check Netlify Build Logs**
   - Go to Netlify dashboard
   - Check build logs for errors

2. **Test Backend Connection**
   - Open `frontend/test-backend-connection.html`
   - Verify all tests pass

3. **Manual Deployment**
   ```bash
   cd frontend
   npm run build
   # Upload dist folder manually to Netlify
   ```

4. **Rollback if Needed**
   ```bash
   git log --oneline
   git checkout <working-commit>
   ```

## **🎯 Success Criteria**

Your frontend deployment is successful when:
- ✅ New Netlify URL loads without errors
- ✅ Can connect to backend at https://asdp-g3cm.onrender.com
- ✅ All features work (login, upload, processing, etc.)
- ✅ No console errors in browser DevTools

---

**Remember**: The backend at https://asdp-g3cm.onrender.com is working perfectly - **DO NOT CHANGE ANYTHING** in the backend code or configuration.
