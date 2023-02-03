// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpIUFjkv6InyIOaK07goCzak2QAHNQ2vI",
  authDomain: "todo-396b6.firebaseapp.com",
  projectId: "todo-396b6",
  storageBucket: "todo-396b6.appspot.com",
  messagingSenderId: "847460486134",
  appId: "1:847460486134:web:f791a0b8909b2dd04a55d7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
