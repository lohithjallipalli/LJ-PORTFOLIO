// Firebase configuration
// ⚠️  Replace these values with your own Firebase project config!
// Go to: https://console.firebase.google.com → Create project → Add web app → Copy config

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC0TYBUy88EchwCAjyyXEmiUnKRvFqSACA",
  authDomain: "lohith-portfolio-49686.firebaseapp.com",
  databaseURL: "https://lohith-portfolio-49686-default-rtdb.firebaseio.com/",
  projectId: "lohith-portfolio-49686",
  storageBucket: "lohith-portfolio-49686.firebasestorage.app",
  messagingSenderId: "1019462065863",
  appId: "1:1019462065863:web:e73e3fd71581038b6fe8e2"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
