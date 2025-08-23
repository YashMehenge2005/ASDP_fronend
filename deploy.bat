@echo off
REM Statethon Deployment Script for Windows
echo 🚀 Starting Statethon deployment...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: Please run this script from the project root directory
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm run install-all

REM Build frontend
echo 🔨 Building frontend...
cd frontend
call npm run build

REM Check if build was successful
if not exist "dist" (
    echo ❌ Frontend build failed!
    pause
    exit /b 1
)

echo ✅ Frontend built successfully!

REM Copy frontend to static directory for backend serving
echo 📁 Copying frontend to static directory...
cd ..
if not exist "static" mkdir static
xcopy /E /I /Y frontend\dist\* static\

echo ✅ Deployment preparation complete!
echo.
echo 🎯 Next steps:
echo 1. Backend: Deploy to Render/Vercel/Heroku
echo 2. Frontend: Deploy to Netlify/Vercel or serve from backend
echo.
echo 📋 Environment variables needed:
echo    SECRET_KEY=your-secure-secret-key
echo    DISABLE_PLOTS=1
echo    MAX_PLOT_ROWS=5000
echo.
echo 🔗 Test your deployment:
echo    Backend health: curl https://your-backend-url.com/healthz
echo    Frontend: Visit your frontend URL
echo.
pause
