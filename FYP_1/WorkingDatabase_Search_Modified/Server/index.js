//
const express = require("express");
const connectDB = require("./db.js");
const Product = require("./models/item.js");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/", async (req, res) => {
  const response = await Product.find();
  return res.json({ products: response });
});

app.listen(3000, () => {
  console.log("app is running");
});
