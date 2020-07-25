const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema(
  {
    likerId: { type: Schema.Types.ObjectId },
  },
  { _id: false, unique: true }
);

const postSchema = new Schema({
  text: {
    type: String,
    trim: true,
    required: "Need to enter text for post",
  },

  likes: [subSchema],

  authorId: {
    type: String,
    required: "Needs user id to make post",
  },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
