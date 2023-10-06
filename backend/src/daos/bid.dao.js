const { BidModel } = require("../models/bid.model");

class BidDao {
  async create(bid) {
    const newBid = new BidModel(bid);
    await newBid.save();
    delete newBid._id;
    return newBid;
  }
}

module.exports = new BidDao();
