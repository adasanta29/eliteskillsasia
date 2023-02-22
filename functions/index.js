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

const functions = require("firebase-functions");
const admin = require ("firebase-admin");

exports.mailTrigger = functions.firestore.document("/{collection}/{id}")
    .onCreate((snap, context) => {
        console.log(snap.data());

        const collection = context.params.collection;
        const id = context.params.id;

        const mail = admin.firestore().collection("mail");

        if (collection === "bookings") {
            return mail.add({ text: "A new booking was made"});
        }

        return null;
    })