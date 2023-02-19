const {
  createUser,
  loginController,
  getallUser,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/register", createUser);
router.post("/login", loginController);
router.get("/all-users", getallUser);

module.exports = router;
