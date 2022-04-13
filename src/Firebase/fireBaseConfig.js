// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDMTFMi15fyYYtum3XkVLJK03oJhR_ip8',
  authDomain: 'as-31b4d.firebaseapp.com',
  projectId: 'as-31b4d',
  storageBucket: 'as-31b4d.appspot.com',
  messagingSenderId: '219766339264',
  appId: '1:219766339264:web:47f7d1d21f5b65c8e85f25',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const baseDato = getFirestore();

export { app, google, baseDato };
