// Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMYyLQAu50cUHuXpHrYartoL2hr2nLiMo",
  authDomain: "ieee-visat-website.firebaseapp.com",
  projectId: "ieee-visat-website",
  storageBucket: "ieee-visat-website.firebasestorage.app",
  messagingSenderId: "713892043284",
  appId: "1:713892043284:web:97b92a656ca016d3712501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
