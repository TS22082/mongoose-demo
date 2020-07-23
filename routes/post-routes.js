const router = require("express").Router();
const { makePost, getPost } = require("../controllers/post-controller");

// Creates a post. Requires email and password
router.post("/post", makePost);

//gets all posts if req.query is not passed
//gets specific post if req.query is passed
router.get("/post", getPost);

module.exports = router;
