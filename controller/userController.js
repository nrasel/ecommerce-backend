const expressAsyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");

module.exports.createUser = expressAsyncHandler(async (req, res) => {
  const email = req.body.email;

  // find user
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    // create a new user
    const newUser = userModel.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exist");
  }
});
