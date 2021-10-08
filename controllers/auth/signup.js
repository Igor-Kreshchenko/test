const bcrypt = require("bcryptjs");
const { User } = require("../../models");
const HttpCode = require("../../helpers/constants");
const { Conflict } = require("http-errors");

const signup = async (req, res, _) => {
  const { email, password, name } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict("Already registered");
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  User.create({ email, password: hashPassword, name });

  res.status(HttpCode.CREATED).json({
    status: "created",
    contentType: "application/json",
    code: HttpCode.CREATED,
    message: "Success register",
  });
};

module.exports = signup;
