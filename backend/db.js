const mongoose = require("mongoose");
const mongoUrl =
  "mongodb+srv://SanaGhufran:12345@simplesignupdatabase.lbn5s5o.mongodb.net/practice1?retryWrites=true&w=majority&appName=simplesignupdatabase";
async function mongoDB() {
  try {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

module.exports = mongoDB;
