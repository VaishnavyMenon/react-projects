// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZTp0Tzmqx_SsWeKtGhrn4YMPOyGVpCSA",
  authDomain: "vite-contact-app-e1f7e.firebaseapp.com",
  projectId: "vite-contact-app-e1f7e",
  storageBucket: "vite-contact-app-e1f7e.appspot.com",
  messagingSenderId: "284477253364",
  appId: "1:284477253364:web:ca89f3318fedc259f560a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)