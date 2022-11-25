//Importaremos firebase con npm para poder meterlo al proyecto de VUE
// # npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFbOYJpMapC0wvy8uoo1LjOQiLx-5YAUM",
  authDomain: "royalcookie-a02f0.firebaseapp.com",
  projectId: "royalcookie-a02f0",
  storageBucket: "royalcookie-a02f0.appspot.com",
  messagingSenderId: "714911823401",
  appId: "1:714911823401:web:20b014848fb8bef5f74e38",
  measurementId: "G-FD9SH9Y8LR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);