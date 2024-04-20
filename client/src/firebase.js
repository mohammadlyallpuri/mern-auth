// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-e2ee2.firebaseapp.com",
  projectId: "mern-auth-e2ee2",
  storageBucket: "mern-auth-e2ee2.appspot.com",
  messagingSenderId: "20889751512",
  appId: "1:20889751512:web:18ef2520f4b7a366c1acad"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);