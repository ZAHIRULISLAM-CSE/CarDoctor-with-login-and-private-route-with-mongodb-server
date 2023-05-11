// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6VWuSehUB52lUul0Ijarq5Eanw_WepnM",
  authDomain: "car-doctor-29a2e.firebaseapp.com",
  projectId: "car-doctor-29a2e",
  storageBucket: "car-doctor-29a2e.appspot.com",
  messagingSenderId: "1048885202323",
  appId: "1:1048885202323:web:b073bbfde876ad5fedac66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;