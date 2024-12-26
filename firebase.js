const admin = require("firebase-admin");
const firebaseAccount = require("C:/Users/codestrup/Downloads/firebase.json");
require("dotenv").config();

admin.initializeApp({
  credential: admin.credential.cert(firebaseAccount),
  databaseURL: process.env.databaseURL,
});

connectdb = admin.database();

//reading
connectdb
  .ref("C:/Users/codestrup/Desktop/dbfile")
  .once("value")
  .then((snapshot) => {
    const data = snapshot.val();
    console.log("Data from db is: ", data);
  });

//write
connectdb.ref("C:/Users/codestrup/Desktop/dbfile").set({
  key1: "Rada",
  key2: "euuu",
});

module.exports= connectdb;