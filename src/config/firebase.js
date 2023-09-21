// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9PHasvCovJqft9R1sYoU5ytNCHdUKzBk",
  authDomain: "apstimes-290cf.firebaseapp.com",
  projectId: "apstimes-290cf",
  storageBucket: "apstimes-290cf.appspot.com",
  messagingSenderId: "905738302384",
  appId: "1:905738302384:web:38648d0a8515cef1c51c75",
  measurementId: "G-4CZYX21W7V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth}
