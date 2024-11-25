const mongoose = require("mongoose");

const connectDB = async () => {
  const URL =
    "mongodb+srv://shahzarkhalique:dTwfaE0WmZ43TtvV@cluster0.lhtjl.mongodb.net/Contrast?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error connecting database: ", error.message);
  }
};

module.exports = connectDB;
