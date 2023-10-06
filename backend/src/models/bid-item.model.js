const { model, Schema } = require("mongoose");

const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    startPrice: { type: Number, required: true },
    currentHightestBid: { type: Number, default: 0 },
    auctionEndTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ["draft", "published", "completed"],
      default: "draft",
    },
    highestBidder: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { versionKey: false, autoIndex: true }
);

module.exports = { ItemModel: model("Item", ItemSchema) };
