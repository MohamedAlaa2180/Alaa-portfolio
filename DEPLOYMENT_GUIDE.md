# Deployment Guide

This guide will walk you through deploying your portfolio to GitHub Pages.

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name it `Alaa-portfolio`
5. Make sure it's set to **Public**
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

## Step 2: Initialize Git and Push Code

Open a terminal in your project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Alaa-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

## Step 4: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once complete, your site will be live at: `https://YOUR_USERNAME.github.io/Alaa-portfolio/`

## Step 5: Verify Your Site

Visit `https://YOUR_USERNAME.github.io/Alaa-portfolio/` to see your live portfolio!

## Making Updates

Whenever you want to update your portfolio:

1. Make your changes locally
2. Test with `npm run dev`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push
   ```
4. GitHub Actions will automatically rebuild and deploy your site

## Custom Domain (Optional)

If you want to use a custom domain like `mohamedalaa.com`:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your repository, create a file `public/CNAME` with your domain:
   ```
   mohamedalaa.com
   ```
3. In your domain registrar's DNS settings, add:
   - Type: **A** records pointing to:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Type: **CNAME** record:
     - Name: `www`
     - Value: `YOUR_USERNAME.github.io`
4. In GitHub repository settings → Pages → Custom domain, enter your domain
5. Wait for DNS propagation (can take up to 24 hours)

## Troubleshooting

### Site not loading or showing 404

1. Make sure GitHub Pages is enabled in Settings → Pages
2. Verify the base path in `vite.config.js` matches your repository name
3. Check the Actions tab for any deployment errors

### Images not loading

1. Make sure image paths start with `/` (e.g., `/projects/image.jpg`)
2. Verify images are in the `public` folder
3. Check browser console for 404 errors

### Changes not appearing

1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Clear browser cache
3. Wait a few minutes for GitHub's CDN to update

## Need Help?

- Check [GitHub Pages documentation](https://docs.github.com/en/pages)
- Review [GitHub Actions logs](https://github.com/YOUR_USERNAME/Alaa-portfolio/actions)
- Open an issue in your repository if you encounter problems

