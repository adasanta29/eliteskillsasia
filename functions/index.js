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