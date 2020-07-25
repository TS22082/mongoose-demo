const router = require("express").Router();
const {
  makePost,
  getPost,
  updatePostText,
  addLike,
  removeLike,
} = require("../controllers/post-controller");

// Creates a post. Requires email and password
router.post("/post", makePost);

//gets all posts if req.query is not passed
//gets specific post if req.query is passed
router.get("/post", getPost);

//updates text in post
router.patch("/post/text", updatePostText);

// adds like to post
router.put("/post/like", addLike);

//removes like to post
router.delete("/post/like", removeLike);

module.exports = router;
