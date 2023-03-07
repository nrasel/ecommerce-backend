const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", true);
    const connect = mongoose.connect(process.env.DB_URI);
    console.log("db connect successfully");
  } catch (error) {
    // console.log(error);
  }
};

module.exports = dbConnect;
