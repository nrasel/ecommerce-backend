const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoutes");

dbConnect();

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
