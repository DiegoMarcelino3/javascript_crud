const { initializeApp, applicationDefault } = require('firebase-admin/app');

const firebaseApp = initializeApp({
  credential: applicationDefault()
})

module.exports = firebaseApp