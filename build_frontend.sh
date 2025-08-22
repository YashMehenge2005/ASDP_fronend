#!/bin/bash
echo "Building frontend..."
cd frontend
npm install
npm run build
echo "Copying frontend to static directory..."
cp -r dist/* ../static/
echo "Frontend build complete!"
