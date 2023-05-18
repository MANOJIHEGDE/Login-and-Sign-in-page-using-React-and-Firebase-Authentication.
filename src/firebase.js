

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOdhSgUdy2nBGDzuwBZ9AN0LYf4oUUs4w",
  authDomain: "login2-5fa63.firebaseapp.com",
  projectId: "login2-5fa63",
  storageBucket: "login2-5fa63.appspot.com",
  messagingSenderId: "115556463061",
  appId: "1:115556463061:web:ceab3ebe008d876ea50d5c",
  measurementId: "G-FB9DXG8608"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };