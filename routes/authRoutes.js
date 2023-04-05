const {
  createUser,
  loginController,
  getallUser,
  getSingleUser,
  deleteAUser,
  updatedUser,
  blockUser,
  unBlockUser,
  handleRefreshToken,
  logOut,
  updatePassword,
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddlware");

const router = require("express").Router();

router.post("/register", createUser);
router.post("/login", loginController);
router.put("/password", authMiddleware, updatePassword);
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logOut);

router.get("/:id", authMiddleware, isAdmin, getSingleUser);
router.delete("/:id", deleteAUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unBlockUser);

module.exports = router;
