const User = require("../models/user");

module.exports = {
  getUser: (req, res) => {
    !req.query.id
      ? User.find({})
          .sort({ date: -1 })
          .then((allUsers) => res.send(allUsers))
          .catch((err) => res.send(err))
      : User.findById({
          _id: req.query.id,
        })
          .then((allUsers) => res.send(allUsers))
          .catch((err) => res.send(err));
  },

  newUser: (req, res) =>
    User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then((newUser) => res.send(newUser))
      .catch((err) => res.send(err)),

  deleteUser: (req, res) =>
    User.findByIdAndDelete({ _id: req.query.id })
      .then((deletedUser) =>
        res.send({ msg: "successfully deleted", user: deletedUser })
      )
      .catch((err) => res.send(err)),
};
