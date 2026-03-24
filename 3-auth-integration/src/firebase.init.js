// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB48dPz2L_sBhWkGYS0LCdKD92Dpwrp05w",
  authDomain: "auth-inte-ce1b9.firebaseapp.com",
  projectId: "auth-inte-ce1b9",
  storageBucket: "auth-inte-ce1b9.firebasestorage.app",
  messagingSenderId: "851615039085",
  appId: "1:851615039085:web:f583ea34e8ad964b410964"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

