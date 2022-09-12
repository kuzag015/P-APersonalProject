const Blog = require("../models/Blog");

const createBlog= (req, res) => {
    Blog.create(req.body)
        .then((newBlog) => {
            res.json({newBlog});
        })
        .catch((err) => {
            res.status(400).json({err})
        });
};

const getAllBlogs = (req, res) => {
    Blog.find()
        .then((allBlogs) => {
            res.json(allBlogs);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const getOneBlog = (req, res) => {
    Blog.findOne({ _id: req.params.id })
        .then((queriedBlog) => {
            res.json(queriedBlog);
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

const updateBlog = (req, res) => {
    Blog.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updatedBlog) => {
            res.json({ updatedBlog });
        })
        .catch((err) => {
        res.status(400).json({ err });
        });
};

const deleteExistingBlog = (req, res) => {
    Blog.deleteOne({ _id: req.params.id })
        .then((deletedResponse) => {
            res.json({ deletedResponse });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

module.exports = {
    createBlog,
    getOneBlog,
    getAllBlogs,
    updateBlog,
    deleteExistingBlog,
};
