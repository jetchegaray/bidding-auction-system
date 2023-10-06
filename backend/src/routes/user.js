const express = require("express");
const userController = require("../controllers/user.controller");
const asyncHandler = require("express-async-handler");

class UserRouter {
  constructor(userController) {
    this.userController = userController;
    this.router = express.Router();

    this.router.get(
      "/desposit/money",
      asyncHandler(userController.depositMoney)
    );
  }
}

module.exports = new UserRouter(userController).router;
