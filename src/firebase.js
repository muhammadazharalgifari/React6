// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMa5OvokRUFrA_ESLxNFPqG2RCO8NahF0",
  authDomain: "biodata-app-zhrr.firebaseapp.com",
  projectId: "biodata-app-zhrr",
  storageBucket: "biodata-app-zhrr.appspot.com",
  messagingSenderId: "1021148762206",
  appId: "1:1021148762206:web:0cb00b61cc8803d73ee4cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
