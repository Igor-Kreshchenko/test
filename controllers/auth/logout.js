const { User } = require("../../models");
const HttpCode = require("../../helpers/constants");

const logout = async (req, res, _) => {
  const id = req.user.id;

  await User.findByIdAndUpdate(id, { token: null });

  return res.status(HttpCode.NO_CONTENT).json({
    status: "success",
    code: HttpCode.OK,
    message: "Success logout",
  });
};

module.exports = logout;
