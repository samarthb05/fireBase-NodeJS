const admin = require("./firebaseConfig");
const db = admin.firestore();

//adding document to firestore is nosql db

async function addDocument() {
  try {
    const userRef = db.collection("users").doc("user-id");
    await userRef.set({
      name: "Samarth Bhokare",
      email: "samarth@gmail.com",
      age: 24,
    });
    console.log("User added");
  } catch (error) {
    console.log(error);
  }
}

addDocument();
