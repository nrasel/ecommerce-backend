const express = require("express");
const asyncHandler = require("express-async-handler");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoutes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

dbConnect();

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);

app.use(notFound);
app.request(errorHandler);
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
