const tasks = [
  {
    id: 1,
    title: "Buy drinks",
    status: "open",
    eventId: 1
  },
  {
    id: 2,
    title: "Prepare music playlist",
    status: "in progress",
    eventId: 1
  },
  {
    id: 3,
    title: "Clean meeting room",
    status: "done",
    eventId: 2
  }
];

function getAllTasks() {
  return tasks;
}

function updateTaskStatus(taskId, newStatus) {
  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    return null;
  }

  task.status = newStatus;
  return task;
}

module.exports = {
  getAllTasks,
  updateTaskStatus
};