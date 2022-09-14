const User = require("../models/User");

const getAllUsers = (req, res) => {
    Blog.find()
        .then((allUsers) => {
            res.json(allUsers);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const Register = (req, res) => {
    User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
    })
        .catch(err => res.json(err));
}

module.exports = {
    Login,
    Register,
    getAllUsers,
}
