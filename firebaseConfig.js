// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import{getStorage} from 'firebase/storage'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlvajnmM8vUE0W1wPTZgyoTewWl6W2ZVc",
  authDomain: "trends-final-project-blog.firebaseapp.com",
  projectId: "trends-final-project-blog",
  storageBucket: "trends-final-project-blog.appspot.com",
  messagingSenderId: "104848819396",
  appId: "1:104848819396:web:dc364f72725d964f0db591",
  measurementId: "G-KWXJMP284V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();