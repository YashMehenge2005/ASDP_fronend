# 🔧 Netlify Environment Variables Setup

## **Your Project Status**
✅ **Project**: asdp-frontend  
✅ **URL**: asdp-frontend.netlify.app  
✅ **Status**: Deployed successfully  

## **🚀 Required Environment Variables**

Go to your Netlify dashboard and set these environment variables:

### **Step 1: Access Environment Variables**
1. Go to [Netlify Dashboard](https://app.netlify.com/projects/asdp-frontend/overview)
2. Click **"Site settings"** (in the left sidebar)
3. Click **"Environment variables"**

### **Step 2: Add These Variables**
```
VITE_API_BASE_URL=https://asdp-g3cm.onrender.com
NODE_ENV=production
```

### **Step 3: Redeploy**
After adding environment variables, trigger a new deploy:
1. Go to **"Deploys"** tab
2. Click **"Trigger deploy"** → **"Deploy site"**

## **🔗 Test Your Connection**

Visit: https://asdp-frontend.netlify.app

**Expected behavior:**
- ✅ Page loads without errors
- ✅ Can connect to backend at https://asdp-g3cm.onrender.com
- ✅ Login/upload features work

## **📋 Next Steps**

1. **Set up custom domain** (optional)
2. **Enable analytics** (optional)
3. **Test all features**

Your frontend should now work perfectly with your backend! 🎉
