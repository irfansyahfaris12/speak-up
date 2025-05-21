// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCC0SzxIEchiUCipE2FL8aBx_H3da34aPA",
  authDomain: "speak-up-66558.firebaseapp.com",
  projectId: "speak-up-66558",
  storageBucket: "speak-up-66558.appspot.com",
  messagingSenderId: "119278141234",
  appId: "1:119278141234:web:8b03e670f7afaa92ece12b",
  measurementId: "G-5PK20Z7E1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
