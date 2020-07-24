const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: "Need to enter text for post",
  },

  likes: {
    type: [{ type: Schema.Types.ObjectId, required: true, unique: true }],
    default: [],
  },

  authorId: {
    type: String,
    required: "Needs user id to make post",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
