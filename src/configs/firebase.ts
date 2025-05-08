// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwh41NeQQ3u8g5--mHvnfZRf55ZmCMsUg",
  authDomain: "pageist.firebaseapp.com",
  projectId: "pageist",
  storageBucket: "pageist.firebasestorage.app",
  messagingSenderId: "520370094424",
  appId: "1:520370094424:web:041e95d3d8fc7ab574652d",
  measurementId: "G-4XHMYZBXJF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
