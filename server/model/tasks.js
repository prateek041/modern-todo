const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name of the task"],
    trim: true,
    maxlength: [20, "Task name cannot be more than 20 characters"],
  },
  description: {
    type: String,
    trim: true,
    maxlength: [50, "Task description cannot be more than 50 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  startTime: {
    type: String,
    requried: [true, "Task starting time should be mentioned"],
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
