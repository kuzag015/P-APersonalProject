const blogController = require("../controllers/blog-controller");

module.exports = (app) => {
    app.post("/api/blog", blogController.createBlog);
    app.get("/api/blog", blogController.getAllBlogs);
    app.get("/api/blog/:id", blogController.getOneBlog);
    app.put("/api/blog/:id", blogController.updateBlog);
    app.delete("/api/blog/:id", blogController.deleteExistingBlog);
}; 


