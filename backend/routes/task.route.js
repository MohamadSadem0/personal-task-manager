const express = require("express");
const router = express.Router();
const taskController = require("../controllers/task.controller");

router.post("/", taskController.createTask);

router.get("/", taskController.getAllTasks);

router.get("/:id", taskController.getTaskById);

router.post("/:id", taskController.updateTaskById);

router.post("/:id", taskController.deleteTaskById);

module.exports = router;
