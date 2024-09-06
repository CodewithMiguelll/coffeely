// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmgvPeKtx1_LQwobBFRD5gisQ-6GNFQ2Q",
  authDomain: "coffeely-1504c.firebaseapp.com",
  projectId: "coffeely-1504c",
  storageBucket: "coffeely-1504c.appspot.com",
  messagingSenderId: "1031433277470",
  appId: "1:1031433277470:web:ba64db3d3c32d274f6de0f",
  measurementId: "G-RBGBC508XC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export { app, auth };
