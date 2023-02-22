const functions = require("firebase-functions");

exports.mailTrigger = functions.firestore.document('/bookings/{id}') 
    .onCreate((snap, context) => {
        console.log(snap.data());

        const bookings = context.params.bookings;
        const id = context.params.id;

        const mail = admin.firestore().collection("mail");

        return mail.add({id})
    })