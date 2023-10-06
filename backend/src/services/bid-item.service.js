const bidItemDao = require("../daos/bid-item.dao");
const { getUTCDateNoTime, decodeToken } = require("../../utils/utils");

class BidItemService {
  constructor({ bidItemDao }) {
    this.bidItemDao = bidItemDao;
  }

  async create(item) {
    const errors = this.validateItem(item);
    if (errors && errors.length) {
      throw new Error(errors);
    }
    console.log(item);

    const auctionEndDate = getUTCDateNoTime(new Date(item.auctionEndDate));
    const currentHightestBid = null;
    const userId = decodeToken(item.userToken);

    return this.bidItemDao.create({
      ...item,
      auctionEndDate,
      currentHightestBid,
      highestBidder: userId,
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
    if (!item.userToken) {
      errors.push("userToken is required");
    }

    return errors;
  }
}

module.exports = new BidItemService({ bidItemDao });
