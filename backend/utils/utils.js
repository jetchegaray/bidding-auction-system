const jwt = require("jsonwebtoken");

const getUTCDateNoTime = (date) => {
  return new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0)
  );
};

const getSignedToken = (id) => {
  return jwt.sign(
    { _id: id },
    process.env.JWT_SECRET //{
    //  expiresIn: process.env.JWT_EXPIRES_IN,
    // }
  );
};

const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (e) {
    console.error("Error verifying decoding id from user token");
    return null;
  }
};

module.exports = {
  getUTCDateNoTime,
  getSignedToken,
  decodeToken,
};
