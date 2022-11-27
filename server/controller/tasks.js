const Tasks = require("../model/tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.status(200).json({
      status: "success",
      data: tasks,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

// get the id of the task from the parameter and return the edit page.
const getOneTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Tasks.findOne({ _id: taskId });

    if (!task) {
      res.status(400).json({
        status: "failed",
        message: "Task does not exist",
      });
    }

    res.status(200).json({
      status: "success",
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      error: error,
    });
  }
};

// create a new task.
const createTask = async (req, res) => {
  try {
    const task = await Tasks.create(req.body);
    if (task) {
      res.status(200).json({
        status: "success",
        message: "Task created successfully",
        task: task,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Task creation failed",
      error: error,
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Tasks.findOneAndDelete({ _id: taskId });
    if (!task) {
      res.status(400).json({
        status: "failed",
        message: "task not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Task deleted succesfully",
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Unable to delete task",
      error: error,
    });
  }
};

const updateTask = (req, res) => {
  res.status(200).send("This is the updated task");
};

module.exports = {
  getAllTasks,
  getOneTask,
  deleteTask,
  updateTask,
  createTask,
};
