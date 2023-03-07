const {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddlware");

const router = require("express").Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/:id", getaProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/", getAllProducts);

module.exports = router;
