const expressAsyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");

// register controller
module.exports.createUser = expressAsyncHandler(async (req, res) => {
  const email = req.body.email;

  // find user
  const findUsers = await userModel.findOne({ email });
  if (!findUsers) {
    // create a new user
    const newUser = userModel.create(req.body);
    res.json({
      newUser,
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
    res.json({
      _id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// get all user

module.exports.getallUser = expressAsyncHandler(async (req, res) => {
  try {
    const getUsers = await userModel.find({});
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});
// get a single user
module.exports.getSingleUser = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const getaUser = await userModel.findById(id);
    res.json({
      getaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// delete a user
module.exports.deleteAUser = expressAsyncHandler(async (req, res) => {
  console.log(req.user._id);
  const { id } = req.params;
  try {
    const deleteUser = await userModel.findByIdAndDelete(id);
    res.json({
      deleteUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// updated user
module.exports.updatedUser = expressAsyncHandler(async (req, res) => {
  // console.log(req.user._id);
  const { _id } = req.user;
  try {
    const updatedaUser = await userModel.findByIdAndUpdate(
      _id,
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedaUser);
  } catch (error) {
    throw new Error(error);
  }
});
