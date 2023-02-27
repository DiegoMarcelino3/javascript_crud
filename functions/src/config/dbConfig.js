const { getFirestore } = require('firebase-admin/firestore');
const firestoreApp = require("./firebaseConfig.js")

const db = getFirestore(firestoreApp)
module.exports = db