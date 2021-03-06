const Post = require("../models/post");

module.exports = {
  makePost: (req, res) =>
    Post.create({
      text: req.body.text,
      authorId: req.body.authorId,
    })
      .then((newPost) => res.send(newPost))
      .catch((err) => res.send(err)),

  getPost: (req, res) =>
    !req.query.id
      ? Post.find()
          .then((allPosts) => res.send(allPosts))
          .catch((err) => res.send(err))
      : Post.findById({ _id: req.query.id })
          .then((post) => res.send(post))
          .catch((err) => res.send(err)),

  updatePostText: (req, res) => {
    Post.findByIdAndUpdate({ _id: req.body.id }, { text: req.body.text })
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  },

  addLike: (req, res) => {
    Post.findByIdAndUpdate(
      { _id: req.body.postId },
      {
        $push: {
          likes: { likerId: req.body.likerId },
        },
      }
    )
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  },

  removeLike: (req, res) => {
    Post.findByIdAndUpdate(
      { _id: req.body.postId },
      {
        $pull: {
          likes: { likerId: req.body.likerId },
        },
      }
    )
      .then((response) => res.send(response))
      .catch((err) => res.send(err));
  },
};
