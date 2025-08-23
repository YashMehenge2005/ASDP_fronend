@echo off
REM Netlify Frontend Deployment Script (Backend stays unchanged)
echo 🚀 Deploying frontend to Netlify...

REM Check if we're in the frontend directory
if not exist "package.json" (
    echo ❌ Error: Please run this script from the frontend directory
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build frontend
echo 🔨 Building frontend...
call npm run build

REM Check if build was successful
if not exist "dist" (
    echo ❌ Frontend build failed!
    pause
    exit /b 1
)

echo ✅ Frontend built successfully!

REM Deploy to Netlify
echo 🌐 Deploying to Netlify...
echo.
echo 📋 Important: Make sure you have set these environment variables in Netlify:
echo    VITE_API_BASE_URL=https://asdp-g3cm.onrender.com
echo    NODE_ENV=production
echo.
echo 🔗 Backend URL (unchanged): https://asdp-g3cm.onrender.com
echo.

REM Check if netlify CLI is installed
netlify --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Netlify CLI not found. Please install it first:
    echo    npm install -g netlify-cli
    echo.
    echo 📁 Manual deployment: Upload the 'dist' folder to Netlify
    pause
    exit /b 1
)

REM Deploy
netlify deploy --prod --dir=dist

echo.
echo ✅ Deployment complete!
echo 🔗 Check your Netlify dashboard for the new URL
echo.
pause
