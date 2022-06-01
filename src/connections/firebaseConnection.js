// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD6oO7niyeuhNVHWHjdyR_WeedpV9nd0zg',
  authDomain: 'personal-todosa-dmin.firebaseapp.com',
  databaseURL: 'https://personal-todosa-dmin-default-rtdb.firebaseio.com',
  projectId: 'personal-todosa-dmin',
  storageBucket: 'personal-todosa-dmin.appspot.com',
  messagingSenderId: '2718868463',
  appId: '1:2718868463:web:d9cf6c87b89e3829038c1a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
