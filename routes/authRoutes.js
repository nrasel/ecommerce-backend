const {
  createUser,
  loginController,
  getallUser,
  getSingleUser,
  deleteAUser,
  updatedUser,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddlware");

const router = require("express").Router();

router.post("/register", createUser);
router.post("/login", loginController);
router.get("/all-users", getallUser);
router.get("/:id", authMiddleware, isAdmin, getSingleUser);
router.delete("/:id", deleteAUser);
router.put("/edit-user", authMiddleware, updatedUser);

module.exports = router;
