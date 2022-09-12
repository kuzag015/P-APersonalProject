const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        required: [true, "First Name is Required!"]
    },
    lastName: {
        type: String,
        required: [true, "Last Name is Required!"]
    },
    email: {
        type: String,
        required: [true, "Email is Required!"]
    },
    password: {
        type: String,
        required: [true, "Password is Required!"]
    },
    confirmPassword: {
        type: String,
        required: [true, "Passwords must match!"]
    }
    
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);