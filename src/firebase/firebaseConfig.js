import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoAmP5MIXhWC-2ZY4qLEHm-bYOQxjoWGc",
  authDomain: "edumate-79455.firebaseapp.com",
  projectId: "edumate-79455",
  storageBucket: "edumate-79455.firebasestorage.app",
  messagingSenderId: "900252559850",
  appId: "1:900252559850:web:2ad8f01a274c3bbea4aa93",
  measurementId: "G-9BL8JP6Z8P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exporta el módulo de autenticación
export const auth = getAuth(app);