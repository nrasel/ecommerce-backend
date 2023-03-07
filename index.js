const express = require("express");
const asyncHandler = require("express-async-handler");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const moragan = require("morgan");
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoutes");
const productRouter = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();

app.get("/", (req, res) => {
  res.send("server is running");
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);

app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
