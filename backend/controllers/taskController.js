const taskModel = require("../models/taskModel");

function getTasks(req, res) {
  const tasks = taskModel.getAllTasks();
  res.json(tasks);
}

function updateTaskStatus(req, res) {
  const taskId = Number(req.params.id);
  const newStatus = req.body.status;

  const allowedStatuses = ["open", "in progress", "done"];

  if (!allowedStatuses.includes(newStatus)) {
    return res.status(400).json({
      error: "Invalid status. Allowed values are: open, in progress, done."
    });
  }

  const updatedTask = taskModel.updateTaskStatus(taskId, newStatus);

  if (!updatedTask) {
    return res.status(404).json({
      error: "Task not found."
    });
  }

  res.json(updatedTask);
}

module.exports = {
  getTasks,
  updateTaskStatus
};