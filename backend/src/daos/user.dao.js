const { UserModel } = require("../models/user.model");

class UserDao {
  create = async (user) => {
    const newUser = new UserModel(user);
    await newUser.save();
    delete newUser._id;
    return newUser;
  };

  findByEmail = async (email) => {
    return await UserModel.findOne({ email: email });
  };
}

module.exports = new UserDao();
