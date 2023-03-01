import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAtoksjwwmh7dN1jGFlAgsigJC4mvnb3uU",
  authDomain: "bento-5ad4e.firebaseapp.com",
  projectId: "bento-5ad4e",
  storageBucket: "bento-5ad4e.appspot.com",
  messagingSenderId: "864652401846",
  appId: "1:864652401846:web:4b331c0ba767e2a85a9a17",
  measurementId: "G-BNV4R6N3EF",
};
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
// export const db = getFirestore(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
},);


