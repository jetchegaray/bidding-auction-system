const express = require("express");
const asyncHandler = require("express-async-handler");
const bidController = require("../controllers/bid.controller");

class BidRouter {
  constructor(bidController) {
    this.bidController = bidController;
    this.router = express.Router();

    this.router.get("/", asyncHandler(this.bidController.getAll));
    this.router.post("/", asyncHandler(this.bidController.create));
  }
}

module.exports = new BidRouter(bidController).router;
