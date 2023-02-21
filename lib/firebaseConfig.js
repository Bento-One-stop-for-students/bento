import { initializeApp } from "firebase/app";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
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
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
