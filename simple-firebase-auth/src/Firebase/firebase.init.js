// Dont share firebase file for professional use otherwise if hacker khaya dite chaile he can do it easily

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATH_5XBl83DEVTkZBSWWqM4HKjDRq1DEs",
  authDomain: "simple-fireabse-auth.firebaseapp.com",
  projectId: "simple-fireabse-auth",
  storageBucket: "simple-fireabse-auth.firebasestorage.app",
  messagingSenderId: "434157496332",
  appId: "1:434157496332:web:44774cac0223403ac3e629",
  measurementId: "G-YTMC3PQ3D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
