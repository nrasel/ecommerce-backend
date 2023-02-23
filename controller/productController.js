const asyncHandler = require("express-async-handler");
module.exports.createProduct = asyncHandler(async (req, res) => {
  res.json({
    message: "Hey it's product routes",
  });
});
