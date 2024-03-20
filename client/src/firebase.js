// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-2b4f4.firebaseapp.com",
  projectId: "mern-blog-2b4f4",
  storageBucket: "mern-blog-2b4f4.appspot.com",
  messagingSenderId: "151656623192",
  appId: "1:151656623192:web:72849b9ce687da04cc2e2d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
