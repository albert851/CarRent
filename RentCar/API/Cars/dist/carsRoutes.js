"use strict";
exports.__esModule = true;
var express_1 = require("express");
var carsCtrl_1 = require("./carsCtrl");
var router = express_1["default"].Router();
router
    // "/api/cars"
    .get("", carsCtrl_1.getAllCars)
    .post("/add", carsCtrl_1.addCar)
    .post("/search/:category", carsCtrl_1.searchFromDB)
    .patch("/:id", carsCtrl_1.updateCarById)["delete"]("/:id", carsCtrl_1.deleteCarById);
exports["default"] = router;
