// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvgvhfFMz5cpytuH41fF1-b2RRdYQo-lA",
  authDomain: "integranutri-e09c7.firebaseapp.com",
  projectId: "integranutri-e09c7",
  storageBucket: "integranutri-e09c7.appspot.com",
  messagingSenderId: "32536405906",
  appId: "1:32536405906:web:714b7299c3f9c78595c34b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );