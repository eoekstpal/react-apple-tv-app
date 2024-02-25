// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaXCrhfJF-swNZLcTkjyJ9ylkNoX937ZU",
  authDomain: "react-apple-tv-app.firebaseapp.com",
  projectId: "react-apple-tv-app",
  storageBucket: "react-apple-tv-app.appspot.com",
  messagingSenderId: "988020646896",
  appId: "1:988020646896:web:7968fe544d644da6103335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;