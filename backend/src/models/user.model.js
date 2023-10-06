const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
  },
  { versionKey: false, autoIndex: true }
);

module.exports = { UserModel: model("User", UserSchema) };
