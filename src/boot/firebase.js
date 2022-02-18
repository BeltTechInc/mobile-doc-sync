import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhVutGjYAlHdCzP-gCx7v_MyAfbiOt0po",
    authDomain: "mobile-doc-sync.firebaseapp.com",
    projectId: "mobile-doc-sync",
    storageBucket: "mobile-doc-sync.appspot.com",
    messagingSenderId: "236770369357",
    appId: "1:236770369357:web:8fdd8e7f5550cc58cce104",
    measurementId: "G-TWR1VP5KBX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;