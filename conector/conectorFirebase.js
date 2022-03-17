require('dotenv').config()
const { initializeApp,applicationDefault } = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore')

initializeApp({
    credential: applicationDefault()
    //databaseURL: 'https://hackathom.firebaseio.com'
});

const db = getFirestore()


module.exports = {
    db,
//aca llamar la db doinde lo necesitaria con const querySnapshot = await db.collection('tabla').get() y querySnapshot.docs para ver solo los documentos
}