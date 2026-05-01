import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// firebase config - uses .env locally, fallback for production
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyA82yBiYHIdw_129AL9Fa8-QNrqOXpxhVY",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "gdg-lead-proj.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "gdg-lead-proj",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "gdg-lead-proj.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1051957895775",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1051957895775:web:e91f48147f00cd757c571ea",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-ZQ06TP30BF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
