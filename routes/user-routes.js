const router = require("express").Router();
const {
  getUser,
  newUser,
  deleteUser,
} = require("../controllers/user-controller.js");

router.get("/user", getUser);
router.post("/user", newUser);
router.delete("/user", deleteUser);

module.exports = router;
