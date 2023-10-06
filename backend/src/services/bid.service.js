const bidDao = require("../daos/bid.dao");
const { decodeToken } = require("../../utils/utils");

class BidService {
  constructor({ bidDao }) {
    this.bidDao = bidDao;
  }

  async create(bid) {
    const errors = this.validateItem(bid);
    if (errors && errors.length) {
      throw new Error(errors);
    }

    const userId = decodeToken(bid.userToken);

    return this.bidDao.create({
      ...bid,
      auctionEndDate,
      currentHightestBid,
      userId,
    });
  }

  async getAll() {
    return this.bidItemDao.getAll();
  }

  validateItem(item) {
    if (!item) {
      return ["item is required"];
    }

    const errors = [];

    if (!item.name) {
      errors.push("name is required");
    }
    if (!item.startPrice) {
      errors.push("startPrice is required");
    }
    if (!item.auctionEndTime) {
      errors.push("auctionEndTime is required");
    }
    if (!item.usertoken) {
      errors.push("userToken is required");
    }

    return errors;
  }
}

module.exports = new BidService({ bidDao });
