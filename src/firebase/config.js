// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNQHDg_HeiYj1wNKpMy-VWbR1gY5sIwuc",
  authDomain: "nutritionistapp-a47b7.firebaseapp.com",
  projectId: "nutritionistapp-a47b7",
  storageBucket: "nutritionistapp-a47b7.appspot.com",
  messagingSenderId: "261560736527",
  appId: "1:261560736527:web:6d1d97e187d2fda304fc7a"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );