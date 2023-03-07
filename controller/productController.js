const asyncHandler = require("express-async-handler");
const productModels = require("../models/productModels");
// it changes to text lowercase
const slugify = require("slugify");

// create products
module.exports.createProduct = asyncHandler(async (req, res) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }
    const newProduct = await productModels.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
    console.log(error);
  }
});

// get a product
module.exports.getaProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const findProducts = await productModels.findById(id);
    res.json(findProducts);
  } catch (error) {
    throw new Error(error);
  }
});

// get all products
module.exports.getAllProducts = asyncHandler(async (req, res) => {
  try {
    const findAllProducts = await productModels.find({});
    res.json(findAllProducts);
  } catch (error) {
    throw new Error(error);
  }
});
//
