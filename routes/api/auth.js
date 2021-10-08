const express = require("express");
const router = express.Router();
const { auth: ctrl } = require("../../controllers");
const { joiValidation } = require("../../middlewares");
const { joiUserSchema, joiSchemaAddUser } = require("../../models");
const { controllerWrapper } = require("../../middlewares");

const addUserValidation = joiValidation(joiSchemaAddUser);
const verifyUserValidation = joiValidation(joiUserSchema);

router.post("/signup", addUserValidation, controllerWrapper(ctrl.signup));
router.post("/login", verifyUserValidation, controllerWrapper(ctrl.login));
router.get("/logout", controllerWrapper(ctrl.logout));
router.get("/current", controllerWrapper(ctrl.current));

module.exports = router;
