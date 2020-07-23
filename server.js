const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user_notes", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const userRoutes = require("./routes/user-routes.js");
const postRoutes = require("./routes/post-routes.js");

app.use(postRoutes, userRoutes);

mongoose.set("useCreateIndex", true);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
