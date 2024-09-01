// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getAuth, GithubAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDghHT0JoEbyLlYmkkJc0Q6KhMOQOQC1z4",
  authDomain: "zapatos-69e46.firebaseapp.com",
  projectId: "zapatos-69e46",
  storageBucket: "zapatos-69e46.appspot.com",
  messagingSenderId: "65753188429",
  appId: "1:65753188429:web:6f3b28910bb674b6007404",
  measurementId: "G-70WQ51G972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GithubAuthProvider()

export {auth, provider}