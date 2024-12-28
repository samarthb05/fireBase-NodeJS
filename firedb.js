//database read and write operation
const admin = require("./firebaseConfig");
const connectdb = admin.database();

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
