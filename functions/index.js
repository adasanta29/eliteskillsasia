const functions = require("firebase-functions");
const admin = require ("firebase-admin");

exports.mailTrigger = functions.firestore.document("/{collection}/{id}")
    .onCreate((snap, context) => {
        console.log(snap.data());

        const collection = context.params.collection;
        const id = context.params.id;

        const mail = admin.firestore().collection("mail");

        if (collection === "bookings") {
            return mail.add(id.params);
        }

        return null;
    })

admin.initializeApp();