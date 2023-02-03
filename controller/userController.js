const expressAsyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");

// register controller
module.exports.createUser = expressAsyncHandler(async (req, res) => {
  const email = req.body.email;

  // find user
  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    // create a new user
    const newUser = userModel.create(req.body);
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser.lastname,
      email: findUser?.email,
      mobile: findUser.email,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("User Already Exist");
  }
});

// login controller
module.exports.loginController = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exists or not
  const findUser = await userModel.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json(findUser);
  } else {
    throw new Error("Invalid Credentials");
  }
});
