"use strict";
exports.__esModule = true;
var express_1 = require("express");
var usersCtrl_1 = require("./usersCtrl");
var router = express_1["default"].Router();
router
    // "/api/users"
    .get("/get-from-cookie", usersCtrl_1.getUserByCookie)
    .get("/logout", usersCtrl_1.logout)
    .post("/register", usersCtrl_1.register)
    .post("/Login", usersCtrl_1.login)
    .patch("/:id", usersCtrl_1.updateRent);
exports["default"] = router;
