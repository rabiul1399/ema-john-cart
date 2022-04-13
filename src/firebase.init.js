// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2uWzrXJapEQGso2Ed_Spc9KXce_HdeTw",
  authDomain: "ema-john-cart-fa0a1.firebaseapp.com",
  projectId: "ema-john-cart-fa0a1",
  storageBucket: "ema-john-cart-fa0a1.appspot.com",
  messagingSenderId: "995022358312",
  appId: "1:995022358312:web:8fb6d991e5b6dc13b1f21d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

