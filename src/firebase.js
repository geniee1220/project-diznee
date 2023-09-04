// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDTN2HOaGmbiARPjvfPLZ_bq53Ow877PVo',
  authDomain: 'project-diznee.firebaseapp.com',
  projectId: 'project-diznee',
  storageBucket: 'project-diznee.appspot.com',
  messagingSenderId: '1049803182454',
  appId: '1:1049803182454:web:eac50c148a6369eb1eea57',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
