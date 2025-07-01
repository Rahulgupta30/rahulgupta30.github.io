# GitHub Pages Deployment Guide

## 🎯 Goal
Deploy your portfolio to: `https://rahulgupta.github.io/`

## 📋 Prerequisites
- GitHub account (username: Rahulgupta30)
- Git installed on your computer
- Your portfolio files ready

## 🚀 Deployment Steps

### Step 1: Create Repository
1. Go to [GitHub.com](https://github.com)
2. Click "+" → "New repository"
3. **Important**: Name it exactly: `rahulgupta.github.io`
4. Make it **Public**
5. Don't initialize with README (we already have files)
6. Click "Create repository"

### Step 2: Upload Your Files
```bash
# Navigate to your portfolio folder
cd d:/Resume/rahul-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Make first commit
git commit -m "Initial portfolio deployment"

# Add GitHub repository as remote
git remote add origin https://github.com/Rahulgupta30/rahulgupta.github.io.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Under "Source": Select "Deploy from a branch"
5. Select branch: "main"
6. Select folder: "/ (root)"
7. Click "Save"

### Step 4: Access Your Website
- Your website will be live at: `https://rahulgupta.github.io/`
- It may take 5-10 minutes to deploy

## 🔧 Important Files to Check
- `index.html` - Main page (must be in root)
- `style.css` - Styles
- `script.js` - JavaScript
- `README.md` - Documentation
- Resume file in parent directory

## 📝 Notes
- Any changes you push to the main branch will automatically update your website
- Use relative paths for all assets
- GitHub Pages is free for public repositories

## 🎉 Success!
Once deployed, share your portfolio: `https://rahulgupta.github.io/`
