const mongoose = require("mongoose");

let environement = process.env.ENVIRONMENT
// let db_url = process.env.MONGO_URL
let db_url = "mongodb+srv://nk6593289:nk6593289@cluster0.gopndzw.mongodb.net/MMTtodo"
const server = '127.0.0.1:27017'  // REPLACE WITH YOUR OWN SERVER
const database = 'MMTtodo'           // REPLACE WITH YOUR OWN DB NAME
const connectToDB = () => {
  mongoose
    .connect(db_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => {
      console.log(`Connected To DB ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = connectToDB;
