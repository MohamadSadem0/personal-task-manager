const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");
const { authenticateToken } = require("../middleware/auth.middleware");

router.post("/", authenticateToken, taskController.createTask);
router.get("/", authenticateToken, taskController.getTasks);
router.post(
  "/update/:taskId",
  authenticateToken,
  taskController.updateTask
);
router.post(
  "/delete/:taskId",
  authenticateToken,
  taskController.deleteTask
);

module.exports = router;
