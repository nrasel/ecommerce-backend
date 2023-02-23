const {
  createProduct,
  getaProduct,
  getAllProducts,
} = require("../controller/productController");

const router = require("express").Router();

router.post("/", createProduct);
router.get("/:id", getaProduct);
router.get("/", getAllProducts);

module.exports = router;
