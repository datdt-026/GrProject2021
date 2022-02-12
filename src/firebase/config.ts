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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCtCNKDS1sh_Dp8eSUj8pGIry1WeC1Rjac",
    authDomain: "group-project-10e8a.firebaseapp.com",
    projectId: "group-project-10e8a",
    storageBucket: "group-project-10e8a.appspot.com",
    messagingSenderId: "606698276347",
    appId: "1:606698276347:web:f017e84e57af7566b1b75e",
    measurementId: "G-EF1MHYBEWD"
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

export { firebase, auth };