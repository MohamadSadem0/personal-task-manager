const Task = require("../models/task.model");

exports.createTask = async (req, res) => {
  try {
    const { title, description, attachments, tags } = req.body;
    const task = new Task({
      title,
      description,
      attachments,
      tags,
      userId: req.user.userId,
    });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title, description, attachments, tags } = req.body;
    const taskId = req.params.taskId;
    const task = await Task.findOneAndUpdate(
      { _id: taskId, userId: req.user.userId },
      { title, description, attachments, tags },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const taskId = req.params.taskId;
    const deletedTask = await Task.findOneAndDelete({
      _id: taskId,
      userId: req.user.userId,
    });
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
