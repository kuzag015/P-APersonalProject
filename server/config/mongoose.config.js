const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/blogDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Successfully connected to database!")
        })
        .catch((err) => {
            console.log("Could not connect to database!" , err)
        }); 