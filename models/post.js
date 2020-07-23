const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: {
    type: String,
    trim: true,
    required: "Need to enter text for task",
  },

  completed: {
    type: Boolean,
    default: false,
  },

  tags: {
    type: [String],
    default: [],
  },

  author: {
    type: String,
    required: "Needs user id to save task",
  },
});

taskSchema.methods.addTag = function (text) {
  this.tags.push(text);
};

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
