#!/bin/bash

# Install Railway CLI
npm install -g @railway/cli

# Login to Railway (will prompt for token)
railway login

# Link to project (create new if doesn't exist)
railway link

# Deploy to Railway
railway up

echo "Deployment to Railway completed!"
echo "Your app will be available at the URL shown above"
