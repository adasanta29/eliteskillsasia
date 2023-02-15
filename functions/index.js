import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
const db = admin.firestore();

// Sendgrid Config
import * as sgMail from '@sendgrid/mail';

const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const newBooking = functions.firestore.document('bookings/{bookingsId}').onCreate( async (change, context) => {

    const bookingsSnap = await db.collection('bookings').doc(context.params.bookingsId).get();

    const msg = {
        to: 'adriansamtani29@gmail.com',
        from: 'busanta29@gmail.com',
        templateId: TEMPLATE_ID,
        dynamicTemplateData: {
            subject: `New Booking on ${bookings.date}`,
            name: bookings.name,
            time: bookings.time,
        },
    };

    return sgMail.send(msg);

})
