const userModel = require("../models/userModel");

module.exports.createUser = async (req, res) => {
  const email = req.body.email;

  const findUser = await userModel.findOne({ email });
  if (!findUser) {
    // create a new user
    const newUser = userModel.create(req.body);
    res.json(newUser);
  } else {
    res.json({
      msg: "User Already Exists",
      success: false,
    });
  }
};
