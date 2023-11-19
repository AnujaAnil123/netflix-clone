// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"




const firebaseConfig = {
  apiKey: "AIzaSyBL58BbrFpUbZ9AqEf4bv6CGU8vqmn8EAA",
  authDomain: "netflix-clone-7e2cf.firebaseapp.com",
  projectId: "netflix-clone-7e2cf",
  storageBucket: "netflix-clone-7e2cf.appspot.com",
  messagingSenderId: "186317745756",
  appId: "1:186317745756:web:19db7c129ff7e53ad34099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleAuth = new GoogleAuthProvider()
export const database = getFirestore(app)