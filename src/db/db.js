import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDph6FF7xsX9dsbDNgCMvPNelODX-d4A4Y",
  authDomain: "sneakers-coder.firebaseapp.com",
  projectId: "sneakers-coder",
  storageBucket: "sneakers-coder.firebasestorage.app",
  messagingSenderId: "344672111144",
  appId: "1:344672111144:web:043ae477d943e64239831d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db 