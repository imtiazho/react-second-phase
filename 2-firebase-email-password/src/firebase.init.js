// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzOf61wZpF05Ipw351gGt-dtBJSNJQyyk",
  authDomain: "explore-email-and-password.firebaseapp.com",
  projectId: "explore-email-and-password",
  storageBucket: "explore-email-and-password.firebasestorage.app",
  messagingSenderId: "474592343582",
  appId: "1:474592343582:web:7afbafda4aab21997d600f",
  measurementId: "G-N0B5EM5T8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);