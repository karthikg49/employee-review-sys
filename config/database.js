const mongoose = require("mongoose");
const dotEnv = require('dotenv');
dotEnv.config();
const {MONGODB_URI} = process.env;

// Connection to mongodb.
mongoose.connect(MONGODB_URI); 
mongoose.set('strictQuery', true);


const db = mongoose.connection; // db store the connection

// cheacking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// exporting the connection.
module.exports = db;
