// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn2h5O7hMzMCnzWfS9-lhPO90VxJNO4j8",
  authDomain: "sprint-4-de45a.firebaseapp.com",
  projectId: "sprint-4-de45a",
  storageBucket: "sprint-4-de45a.appspot.com",
  messagingSenderId: "290890091910",
  appId: "1:290890091910:web:0db85c2f9251498deeb007",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataBase = getFirestore(app);
