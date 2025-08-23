#!/bin/bash

# Statethon Deployment Script
echo "🚀 Starting Statethon deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm run install-all

# Build frontend
echo "🔨 Building frontend..."
cd frontend
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Frontend build failed!"
    exit 1
fi

echo "✅ Frontend built successfully!"

# Copy frontend to static directory for backend serving
echo "📁 Copying frontend to static directory..."
cd ..
mkdir -p static
cp -r frontend/dist/* static/

echo "✅ Deployment preparation complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Backend: Deploy to Render/Vercel/Heroku"
echo "2. Frontend: Deploy to Netlify/Vercel or serve from backend"
echo ""
echo "📋 Environment variables needed:"
echo "   SECRET_KEY=your-secure-secret-key"
echo "   DISABLE_PLOTS=1"
echo "   MAX_PLOT_ROWS=5000"
echo ""
echo "🔗 Test your deployment:"
echo "   Backend health: curl https://your-backend-url.com/healthz"
echo "   Frontend: Visit your frontend URL"
