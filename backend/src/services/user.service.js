const userDao = require("../daos/user.dao");
const bcryptjs = require("bcryptjs");
const { getSignedToken } = require("../../utils/utils");

class UserService {
  constructor(userDao) {
    this.userDao = userDao;
  }

  signup = async (newUser) => {
    const errors = this.validateUser(newUser);

    if (errors && errors.length) {
      throw new Error(errors);
    }
    if (await this.userDao.findByEmail(newUser.email)) {
      throw new Error("User already exists");
    }

    const hash = await bcryptjs.hash(newUser.password, 10);
    return this.userDao.create({ ...newUser, password: hash });
  };

  signin = async (user) => {
    const errors = this.validateUser(user);

    if (errors && errors.length) {
      throw new Error(errors);
    }

    const userExists = await this.userDao.findByEmail(user.email);
    if (!userExists) {
      throw new Error("does not exist a user with that email");
    }
    const result = await bcryptjs.compare(user.password, userExists.password);

    if (!result) {
      throw new Error("Incorrect password");
    }

    return getSignedToken(userExists._id.toString());
  };

  validateUser = (user) => {
    if (!user) {
      return ["user is required"];
    }

    const errors = [];

    if (!user.email) {
      errors.push("email is required");
    }
    if (!user.password) {
      errors.push("password is required");
    }

    return errors;
  };
}

module.exports = new UserService(userDao);
