import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxGcGafWfOuE5gm9JF3K_xEikuboOKJ5M",
    authDomain: "cs50final-9a588.firebaseapp.com",
    projectId: "cs50final-9a588",
    storageBucket: "cs50final-9a588.appspot.com",
    messagingSenderId: "401097045543",
    appId: "1:401097045543:web:f4dd6ff3208ce6bda58002",
    measurementId: "G-JB84X0Q27Q"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)