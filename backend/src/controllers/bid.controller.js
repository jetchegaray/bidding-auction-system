const { response } = require("../../app");
const bidService = require("../services/bid.service");

class BidController {
  constructor({ bidService }) {
    this.bidService = bidService;
  }

  getAll = async (req, res) => {
    const bids = await this.bidService.getAll();
    return response.status(200).json(bids);
  };

  create = async (req, res) => {
    const { body } = req;
    const newBid = await this.bidService.create(body);
    return response.status(200).json(newBid);
  };
}

module.exports = new BidController({ bidService });
