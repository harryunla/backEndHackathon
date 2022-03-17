require("dotenv").config();
const admin = require("firebase-admin");
const {getFirestore} = require('firebase-admin/firestore');
const serviceAccount = require("../../hackathom-key-firebase.json");



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const db = getFirestore();


module.exports = {
    db,
//aca llamar la db doinde lo necesitaria con const querySnapshot = await db.collection('tabla').get() y querySnapshot.docs para ver solo los documentos
}