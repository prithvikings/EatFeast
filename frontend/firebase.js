// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "eatfeast-1bbe2.firebaseapp.com",
  projectId: "eatfeast-1bbe2",
  storageBucket: "eatfeast-1bbe2.firebasestorage.app",
   messagingSenderId: "261990829520",
  appId: "1:261990829520:web:c9f0cae6eef77f5aa5bdd5",
  measurementId: "G-SHBMZBN51D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app)

export {app,auth}

