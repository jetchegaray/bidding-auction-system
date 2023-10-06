const express = require("express");
const asyncHandler = require("express-async-handler");
const bidItemController = require("../controllers/bid-item.controller");

class BidItemsRouter {
  constructor(bidItemController) {
    this.bidItemController = bidItemController;
    this.router = express.Router();

    this.router.get("/", asyncHandler(this.bidItemController.getAll));
    this.router.post("/", asyncHandler(this.bidItemController.create));
  }
}

module.exports = new BidItemsRouter(bidItemController).router;
