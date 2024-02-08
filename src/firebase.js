// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXA-ZwS2NAIKygjb4MRADEdOdS8cwn5OY",
  authDomain: "default-12f25.firebaseapp.com",
  projectId: "default-12f25",
  storageBucket: "default-12f25.appspot.com",
  messagingSenderId: "818526303290",
  appId: "1:818526303290:web:6b10ce877d6a85b23ab103",
  measurementId: "G-CPV09R852X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;