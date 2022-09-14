const userController = require("../controllers/user-controller");

module.exports = (app) => {
    // app.post("/api/Login", userController.Login);
    app.post("/api/Register", userController.Register);
    app.get("/api/user", userController.getAllUsers);
};
