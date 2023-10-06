const bidItemService = require("../services/bid-item.service");

class BidItemController {
  constructor({ bidItemService }) {
    this.bidItemService = bidItemService;
  }

  getAll = async (req, res) => {
    const bidItems = await this.bidItemService.getAll();
    return res.status(200).json(bidItems);
  };

  create = async (req, res) => {
    const { body } = req;
    const newItem = await this.bidItemService.create(body);
    return res.status(200).json(newItem);
  };
}

module.exports = new BidItemController({ bidItemService });
