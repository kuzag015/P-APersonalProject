const mongoose = require("mongoose");
const { stringify } = require("querystring");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Blog Post must have title"],
    },
    description: {
        type: String,
        required: [true, "Blog Post must have description"],
    }, 
    image: {
        type: String,
        required: [true, "Blog Post must have image attached"],
    },
    allComments: {
        comment: {
            type: String
        }
    }
}, {timestamps: true}); 

module.exports = mongoose.model("Blog", blogSchema);
// blogs