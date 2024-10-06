// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8G77B7x7H2RPctzDVibc3Ckg50a2lnQw",
  authDomain: "netflixgpt-53d4c.firebaseapp.com",
  projectId: "netflixgpt-53d4c",
  storageBucket: "netflixgpt-53d4c.appspot.com",
  messagingSenderId: "366485819375",
  appId: "1:366485819375:web:1f5fb44a7995f7511d301a",
  measurementId: "G-H91ZJCY0R9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
