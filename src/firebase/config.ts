// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  doc,
  setDoc,
  where,
  addDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeVP89fw7lJ1MrPCJhyniXbKjvbB4KwdQ",
  authDomain: "lungcancer-a501d.firebaseapp.com",
  projectId: "lungcancer-a501d",
  storageBucket: "lungcancer-a501d.appspot.com",
  messagingSenderId: "870074827032",
  appId: "1:870074827032:web:fabf8b71c7898585c0de6d",
  measurementId: "G-F19X9FE8HE"
};


// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  app = firebase.app();
}

const auth = getAuth(app);
const db = getFirestore(app);
export { firebase, auth, db };