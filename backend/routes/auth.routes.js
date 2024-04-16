const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { authenticateToken } = require("../middleware/auth.middleware");

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
