// src/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDjw2BHCdZKlyc7rrNvIaqfzBZIyZ_-pJI",
    authDomain: "thinkingapp-5518e.firebaseapp.com",
    projectId: "thinkingapp-5518e",
    storageBucket: "thinkingapp-5518e.appspot.com",
    messagingSenderId: "703993686158",
    appId: "1:703993686158:web:a75279e29ec94b690d41df",
    measurementId: "G-9LXRTDEBCZ"
  });


export default firebaseConfig;