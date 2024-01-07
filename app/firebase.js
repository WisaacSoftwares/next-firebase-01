// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzCdi5O5vMkWcCJNwV4GK-n974wbGQTlM",
  authDomain: "db-test-02.firebaseapp.com",
  projectId: "db-test-02",
  storageBucket: "db-test-02.appspot.com",
  messagingSenderId: "861214320590",
  appId: "1:861214320590:web:31f238f05e8e9833396d9f",
  measurementId: "G-07CPGR108G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);