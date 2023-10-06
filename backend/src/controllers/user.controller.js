const { setRandomFallback } = require("bcryptjs");
const userService = require("../services/user.service");

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  depositMoney = async (req, res) => {};

  signup = async (req, res) => {
    const newUser = req.body;

    const savedUser = await userService.signup(newUser);
    return res.status(200).json(savedUser);
  };

  signin = async (req, res) => {
    const payload = req.body;

    const signinUser = await userService.signin(payload);

    return res.status(200).json(signinUser);
  };
}

module.exports = new UserController(this.userService);
