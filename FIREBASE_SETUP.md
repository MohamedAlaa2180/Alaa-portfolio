# Firebase Analytics Setup Guide

Follow these steps to add Firebase Analytics to your portfolio:

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or select an existing project
3. Enter a project name (e.g., "Alaa Portfolio")
4. (Optional) Enable Google Analytics
5. Click **"Create project"**

## Step 2: Register Your Web App

1. In your Firebase project, click the **Web icon** (</>) to add a web app
2. Enter an app nickname (e.g., "Portfolio Website")
3. Check **"Also set up Firebase Hosting"** (optional)
4. Click **"Register app"**

## Step 3: Get Your Firebase Config

After registering, Firebase will show you a configuration object that looks like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456",
  measurementId: "G-XXXXXXXXXX"
};
```

## Step 4: Update Your Code

1. Open `src/firebase.js`
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_ACTUAL_API_KEY",
  authDomain: "YOUR_ACTUAL_AUTH_DOMAIN",
  projectId: "YOUR_ACTUAL_PROJECT_ID",
  storageBucket: "YOUR_ACTUAL_STORAGE_BUCKET",
  messagingSenderId: "YOUR_ACTUAL_SENDER_ID",
  appId: "YOUR_ACTUAL_APP_ID",
  measurementId: "YOUR_ACTUAL_MEASUREMENT_ID"
};
```

## Step 5: Enable Analytics in Firebase Console

1. In Firebase Console, go to **Analytics** → **Dashboard**
2. Click **"Enable Google Analytics"** if not already enabled
3. Follow the setup wizard

## Step 6: Deploy and Test

1. Commit and push your changes:
   ```bash
   git add .
   git commit -m "feat: add Firebase Analytics"
   git push origin main
   ```

2. Wait for GitHub Pages to deploy (1-2 minutes)

3. Visit your portfolio and check Firebase Console → Analytics → Events
   - You should see `page_view` events within 24 hours

## What Gets Tracked?

The current implementation tracks:
- ✅ Page views (every time someone visits a page)
- ✅ Page paths (which pages are visited)
- ✅ Navigation between pages

## Security Note

⚠️ **Important**: Your Firebase API key is safe to expose in client-side code. Firebase uses security rules to protect your data. However, make sure to:
1. Set up proper Firebase Security Rules
2. Restrict your API key to your domain in Firebase Console (recommended)

## Adding Custom Events (Optional)

You can track custom events like button clicks. Example:

```javascript
import { logEvent } from 'firebase/analytics';
import { analytics } from './firebase';

// Track resume download
logEvent(analytics, 'resume_download');

// Track project view
logEvent(analytics, 'view_project', {
  project_name: 'Zombieleta'
});
```

## Useful Firebase Analytics Features

1. **Real-time Dashboard**: See live visitors
2. **User Demographics**: Age, gender, location
3. **Device Info**: Mobile vs Desktop, OS, Browser
4. **Engagement**: Session duration, pages per session
5. **Traffic Sources**: Where visitors come from

## View Your Analytics

Visit: [Firebase Console](https://console.firebase.google.com/) → Your Project → Analytics

---

Need help? Check the [Firebase Documentation](https://firebase.google.com/docs/analytics/get-started?platform=web)

