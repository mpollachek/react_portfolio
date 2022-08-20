// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK-WVSm6y8g5e-p_WIrjQzm2pmIKX8Mi8",
  authDomain: "farmstandfinder-f89eb.firebaseapp.com",
  projectId: "farmstandfinder-f89eb",
  storageBucket: "farmstandfinder-f89eb.appspot.com",
  messagingSenderId: "1013180743053",
  appId: "1:1013180743053:web:cdcba5d0df4bbac9f9d1c4",
  measurementId: "G-8T7TE4W1FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();