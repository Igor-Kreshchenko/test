const { User } = require("../../models");
const HttpCode = require("../../helpers/constants");
const { Unauthorized } = require("http-errors");

const current = async (req, res, _) => {
  const id = req.user.id;
  const user = await User.findById(id);

  if (!user) {
    throw new Unauthorized();
  }

  return res.json({
    status: "success",
    code: HttpCode.OK,
    user: {
      email: user.email,
    },
  });
};

module.exports = current;
