
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginonecart-fdbe0.firebaseapp.com",
  projectId: "loginonecart-fdbe0",
  storageBucket: "loginonecart-fdbe0.firebasestorage.app",
  messagingSenderId: "461518850712",
  appId: "1:461518850712:web:4fa7b223347998b1efdeed"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth, provider };
