const userController = require("../controllers/user.controller");
const { Router } = require("express");
const asyncHandler = require("express-async-handler");

class AuthRouter {
  constructor(userController) {
    this.userController = userController;
    this.router = Router();

    this.router.post("/signup", asyncHandler(userController.signup));
    this.router.post("/signin", asyncHandler(userController.signin));
  }

  getRouter = () => {
    return this.router;
  };
}

module.exports = new AuthRouter(userController).getRouter();
