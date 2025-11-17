import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
// TODO: Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCaB-IePtgKJim3bRFQs5ojlz7VEnXp5UI",
  authDomain: "alaa-portfolio-d057a.firebaseapp.com",
  projectId: "alaa-portfolio-d057a",
  storageBucket: "alaa-portfolio-d057a.firebasestorage.app",
  messagingSenderId: "1098189444598",
  appId: "1:1098189444598:web:b85ffd0dd58ff9898c23d7",
  measurementId: "G-X6JH1Y5131"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };

