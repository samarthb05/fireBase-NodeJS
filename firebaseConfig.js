const admin = require("firebase-admin");
const firebaseAccount = require("C:/Users/codestrup/Downloads/firebase.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(firebaseAccount),
  databaseURL: process.env.databaseURL,
});

module.exports = admin;
