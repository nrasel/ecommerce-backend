const { createProduct } = require("../controller/productController");

const router = require("express").Router();

router.post("/", createProduct);

module.exports = router;
