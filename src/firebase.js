// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKZnk1Ste0Smc_SQQSM100qNvx7SqVIbs",
  authDomain: "react-auth-a834b.firebaseapp.com",
  projectId: "react-auth-a834b",
  storageBucket: "react-auth-a834b.appspot.com",
  messagingSenderId: "584187382142",
  appId: "1:584187382142:web:2ec07da0a085b57ab58b2f",
  measurementId: "G-9V3XRMCMCY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

