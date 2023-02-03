const { createUser, loginController } = require("../controller/userController");

const router = require("express").Router();

router.post("/register", createUser);
router.post("/login", loginController);

module.exports = router;
