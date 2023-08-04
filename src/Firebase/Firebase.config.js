// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLrTAzdBWEeQdQrLRmrptrSRXeMzlsKFQ",
  authDomain: "news-portal-ceebc.firebaseapp.com",
  projectId: "news-portal-ceebc",
  storageBucket: "news-portal-ceebc.appspot.com",
  messagingSenderId: "871555363856",
  appId: "1:871555363856:web:c4281c810a85bd5dcb0695"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;