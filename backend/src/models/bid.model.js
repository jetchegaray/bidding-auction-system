const { model, Schema } = require("mongoose");

const BidSchema = new Schema(
  {
    bidPrice: { type: Number, required: true },
    bidTimestamp: { type: Date, default: Date.now() },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    itemId: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  },
  { versionKey: false, autoIndex: true }
);

module.exports = { BidModel: model("Bid", BidSchema) };
