import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

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

// Initialize Firebase Auth with AsyncStorage
export const firebase_auth = initializeAuth(firebaseapp, {
    persistence: getReactNativePersistence(AsyncStorage),
});

// Initialize Firestore
export const firebase_db = getFirestore(firebaseapp);
