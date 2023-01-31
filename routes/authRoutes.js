const { createUser } = require("../controller/userController");

const router = require("express").Router();

router.post("/register", createUser);

module.exports = router;
