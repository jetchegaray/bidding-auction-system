const { ItemModel } = require("../models/bid-item.model");

class ItemDao {
  async create(item) {
    const newItem = new ItemModel(item);
    await newItem.save();
    delete newItem._id;
    return newItem;
  }

  async getAll() {
    return await ItemModel.find();
  }
}

module.exports = new ItemDao();
