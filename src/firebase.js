import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const app = initializeApp({
    apiKey: "AIzaSyBTGQfbyh2MnkmKgxakS0P2PtoafgV2VIA",
    authDomain: "clone-14219.firebaseapp.com",
    projectId: "clone-14219",
    storageBucket: "clone-14219.appspot.com",
    messagingSenderId: "656730153835",
    appId: "1:656730153835:web:7953c9b2f1f59886f8222e",
    measurementId: "G-LE7FT5R5M4"
  });

  // FOR DATABASE
const db = firebase.firestore();
export default db;