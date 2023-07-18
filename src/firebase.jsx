
import { initializeApp } from "firebase/app";
// import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBV6rgxjHPf_EAA3iNJzSgyumjiZxMT4y8",
  authDomain: "chat-21fde.firebaseapp.com",
  projectId: "chat-21fde",
  storageBucket: "chat-21fde.appspot.com",
  messagingSenderId: "929137873177",
  appId: "1:929137873177:web:2fff0451ac2da1e7b6b588"
};




export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();
