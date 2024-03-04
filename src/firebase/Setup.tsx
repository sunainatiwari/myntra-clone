// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import App from "../App";

const firebaseConfig = {
  apiKey: "AIzaSyDIWHNElOaJazbYx3njNWSj8o2BHpKrH6k",
  authDomain: "myntra-clone-b8c88.firebaseapp.com",
  projectId: "myntra-clone-b8c88",
  storageBucket: "myntra-clone-b8c88.appspot.com",
  messagingSenderId: "936396174314",
  appId: "1:936396174314:web:dd8b04a73e2f9a6dc0f893"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)