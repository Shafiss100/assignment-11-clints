// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2MF_nnCmVUbwRV1N6AEtNqcYhhKDvs30",
  authDomain: "bigbazar-bdb11.firebaseapp.com",
  projectId: "bigbazar-bdb11",
  storageBucket: "bigbazar-bdb11.appspot.com",
  messagingSenderId: "683631057300",
  appId: "1:683631057300:web:8bd3d997d6c64991d79781",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;