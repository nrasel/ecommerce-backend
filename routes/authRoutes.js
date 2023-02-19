const {
  createUser,
  loginController,
  getallUser,
  getSingleUser,
  deleteAUser,
  updatedUser,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/register", createUser);
router.post("/login", loginController);
router.get("/all-users", getallUser);
router.get("/:id", getSingleUser);
router.delete("/:id", deleteAUser);
router.put("/:id", updatedUser);

module.exports = router;
