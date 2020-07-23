const router = require("express").Router();
const {
  makePost,
  getPost,
  updatePostText,
  addComment,
} = require("../controllers/post-controller");

// Creates a post. Requires email and password
router.post("/post", makePost);

//gets all posts if req.query is not passed
//gets specific post if req.query is passed
router.get("/post", getPost);

//updates text in post
router.patch("/post/text", updatePostText);

// adds comment to post
router.put("/post/comment", addComment);

module.exports = router;
