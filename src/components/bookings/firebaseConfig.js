// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMJfIEmixv9azloaxaHV_wJIOmmPUSjPc",
  authDomain: "eliteskillsasia.firebaseapp.com",
  projectId: "eliteskillsasia",
  storageBucket: "eliteskillsasia.appspot.com",
  messagingSenderId: "379598924702",
  appId: "1:379598924702:web:183ea85760b4919ed1448f",
  measurementId: "G-RV6ELVLRRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);


// "site": "eliteskillsasia",
// "build": "react-scripts build",