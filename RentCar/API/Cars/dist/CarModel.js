"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CarsSchema = new mongoose_1["default"].Schema({
    carType: {
        type: String,
        "enum": ['cars', 'van', 'commercial', 'moto']
    },
    carName: String,
    carPrice: Number,
    carAvailabe: {
        type: Number,
        "default": 3
    },
    carImg: String
});
var UserModel = mongoose_1["default"].model("cars", CarsSchema);
exports["default"] = UserModel;
