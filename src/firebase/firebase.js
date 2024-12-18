// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhwdNO327sOmA8wB9GCqGwqIUtQNLQAkE",
  authDomain: "fe-pro-f8738.firebaseapp.com",
  projectId: "fe-pro-f8738",
  storageBucket: "fe-pro-f8738.firebasestorage.app",
  messagingSenderId: "368674066931",
  appId: "1:368674066931:web:544469e0cac2ff7ef80286",
  measurementId: "G-9VE8VJ53N6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };