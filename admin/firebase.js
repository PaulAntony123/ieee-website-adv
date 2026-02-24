// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMYyLQAu50cUHuXpHrYartoL2hr2nLiMo",
  authDomain: "ieee-visat-website.firebaseapp.com",
  projectId: "ieee-visat-website",
  storageBucket: "ieee-visat-website.firebasestorage.app",
  messagingSenderId: "713892043284",
  appId: "1:713892043284:web:97b92a656ca016d3712501",
  measurementId: "G-YD7NYJJV1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
