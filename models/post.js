const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: "Need to enter text for post",
  },

  comments: {
    type: [
      {
        comment: { type: String, trim: true, required: true },
        authorId: { type: String, trim: true, required: true },
      },
    ],

    default: [],
  },

  authorId: {
    type: String,
    required: "Needs user id to make post",
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
