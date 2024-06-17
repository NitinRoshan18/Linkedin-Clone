import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { serverTimestamp } from 'firebase/firestore';

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
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);



export { db, auth, serverTimestamp };
