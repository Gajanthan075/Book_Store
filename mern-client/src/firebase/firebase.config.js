// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIisHFJNcFfoyfeUQ4sZA0HyeDWP83JpQ",
  authDomain: "mern-book-inventory-12915.firebaseapp.com",
  projectId: "mern-book-inventory-12915",
  storageBucket: "mern-book-inventory-12915.firebasestorage.app",
  messagingSenderId: "85283931309",
  appId: "1:85283931309:web:0eeab235261d7feff53224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
