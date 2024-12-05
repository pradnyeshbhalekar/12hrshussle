import { initializeApp } from 'firebase/app';
import { getAuth, getFirestore } from 'firebase/auth';


// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBUvD7SpKB1EoFehBWYAy_3kwsFy__15xc",
  authDomain: "hrshue-9d366.firebaseapp.com",
  projectId: "hrshue-9d366",
  storageBucket: "hrshue-9d366.firebasestorage.app",
  messagingSenderId: "783637535524",
  appId: "1:783637535524:web:9a3a49f852da0df753f1b1",
  measurementId: "G-HEXLD1XVZT"
};

// Initialize Firebase app
const firebaseapp = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const firebase_auth = getAuth(firebaseapp);

// Initialize Firestore


