const functions = require("firebase-functions");
const admin = require ("firebase-admin");
admin.initializeApp();

exports.mailTrigger = functions.firestore.document("/bookings/{id}")
    .onCreate(async (snap, context) => {
        const bookingData = snap.data();
        console.log("New Booking Data:", bookingData);
        console.log("Id: ", context.params.id)
        const mail = admin.firestore().collection("mail");

        const mailData = {
            date: bookingData.date,
            name: bookingData.name,
            time: bookingData.time,
            email: bookingData.email,
        };
        await mail.add(mailData);
        return null;
    });
