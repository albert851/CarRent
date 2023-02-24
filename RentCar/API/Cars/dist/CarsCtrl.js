"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.searchFromDB = exports.deleteCarById = exports.updateCarById = exports.addCar = exports.getAllCars = void 0;
var carModel_1 = require("./carModel");
var jwt_simple_1 = require("jwt-simple");
function getAllCars(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var carsDB, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, carModel_1["default"].find()];
                case 1:
                    carsDB = _a.sent();
                    res.send({ carsDB: carsDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    res.status(500).send({ error: error_1.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.getAllCars = getAllCars;
function addCar(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, carType, carName, carPrice, carImg, carDB, cookie, secret, JWTCookie, error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, carType = _a.carType, carName = _a.carName, carPrice = _a.carPrice, carImg = _a.carImg;
                    if (!carType || !carName || !carPrice)
                        throw new Error("Couldn't get all fields from req.body");
                    console.log({ carType: carType, carName: carName, carPrice: carPrice, carImg: carImg });
                    carDB = new carModel_1["default"]({ carType: carType, carName: carName, carPrice: carPrice, carImg: carImg });
                    return [4 /*yield*/, carDB.save()];
                case 1:
                    _b.sent();
                    cookie = { carId: carDB._id };
                    secret = process.env.JWT_SECRET;
                    if (!secret)
                        throw new Error("Couldn't load secret from .env");
                    JWTCookie = jwt_simple_1["default"].encode(cookie, secret);
                    if (carDB) {
                        res.cookie("carid", JWTCookie);
                        res.send({ addCar: true, carDB: carDB });
                    }
                    else {
                        res.send({ addCar: false });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _b.sent();
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.addCar = addCar;
function updateCarById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, carPrice, carAvailabe, carDB, error_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    _a = req.body, carPrice = _a.carPrice, carAvailabe = _a.carAvailabe;
                    return [4 /*yield*/, carModel_1["default"].findByIdAndUpdate(req.params.id, { carPrice: carPrice, carAvailabe: carAvailabe }, { "new": true, runValidators: true })];
                case 1:
                    carDB = _b.sent();
                    res.send({ carDB: carDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _b.sent();
                    res.status(500).send({ error: error_3.message });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updateCarById = updateCarById;
function deleteCarById(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var carDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    console.log(req.params.id);
                    return [4 /*yield*/, carModel_1["default"].findByIdAndDelete(req.params.id)];
                case 1:
                    carDB = _a.sent();
                    res.send({ carDB: carDB });
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deleteCarById = deleteCarById;
function searchFromDB(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var category, carSearch, pattern, carDB, carDB, carDB, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 7, , 8]);
                    category = req.params.category;
                    carSearch = req.body.carSearch;
                    pattern = RegExp(carSearch);
                    if (!(category === "name")) return [3 /*break*/, 2];
                    return [4 /*yield*/, carModel_1["default"].find({ 'carName': { $regex: pattern } })];
                case 1:
                    carDB = _a.sent();
                    res.send({ carDB: carDB });
                    return [3 /*break*/, 6];
                case 2:
                    if (!(category == "price")) return [3 /*break*/, 4];
                    return [4 /*yield*/, carModel_1["default"].find({ 'carPrice': { $regex: Number(pattern) } })];
                case 3:
                    carDB = _a.sent();
                    res.send({ carDB: carDB });
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, carModel_1["default"].find({ 'carAvailabe': { $regex: Number(pattern) } })];
                case 5:
                    carDB = _a.sent();
                    res.send({ carDB: carDB });
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    error_5 = _a.sent();
                    res.status(500).send({ error: error_5.message });
                    return [3 /*break*/, 8];
                case 8: return [2 /*return*/];
            }
        });
    });
}
exports.searchFromDB = searchFromDB;
