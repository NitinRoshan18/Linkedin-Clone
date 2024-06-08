// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1TF3f0msNVcirp9ai3zchCQk8ctO12Zk",
  authDomain: "linkedin-clone-227e1.firebaseapp.com",
  databaseURL: "https://linkedin-clone-227e1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "linkedin-clone-227e1",
  storageBucket: "linkedin-clone-227e1.appspot.com",
  messagingSenderId: "268981090982",
  appId: "1:268981090982:web:aa57e70f48b5bbbba85267",
  measurementId: "G-ZCJH5TN5B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);