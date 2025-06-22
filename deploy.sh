#!/bin/bash
# Deploy script for the 3D Portfolio

echo "Building the project..."
bun run build

echo "Preparing for deployment..."
cd dist

# Create a .nojekyll file to bypass GitHub Pages Jekyll processing
touch .nojekyll

# If deploying to a custom domain
# echo "your-custom-domain.com" > CNAME

echo "Deploying to GitHub Pages..."
# Initialize git repository in the dist folder
git init
git add -A
git commit -m "Deploy portfolio"

# Push to the gh-pages branch of your repository
# Make sure to replace YOUR_USERNAME with your actual GitHub username
# and YOUR_REPOSITORY with your repository name
git push -f git@github.com:YOUR_USERNAME/YOUR_REPOSITORY.git main:gh-pages

cd ..
echo "Deployment complete!"
