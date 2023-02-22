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
function handleRegister(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var password, email, userName, data, error, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    checkIfConnected();
                    password = ev.target.elements.password.value;
                    email = ev.target.elements.email.value;
                    userName = ev.target.elements.name.value;
                    return [4 /*yield*/, axios.post("/api/users/register", {
                            password: password,
                            email: email,
                            userName: userName
                        })];
                case 1:
                    data = (_a.sent()).data;
                    window.location.href = ("./LogIn.html");
                    error = data.error;
                    if (error)
                        throw error;
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleLogIn(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var password, email, data, userDB, ok_1, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    password = ev.target.elements.password.value;
                    email = ev.target.elements.email.value;
                    return [4 /*yield*/, axios.post("/api/users/login", { password: password, email: email })];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    window.location.href = ("./index.html");
                    ok_1 = data.ok;
                    if (ok_1) {
                        console.log("suuccesful Login");
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleLogout() {
    return __awaiter(this, void 0, void 0, function () {
        var data, logout, area, regLogButtons, rentBtn, logOutBtn, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/api/users/logout")];
                case 1:
                    data = (_a.sent()).data;
                    logout = data.logout;
                    if (logout) {
                        window.location.href = "./index.html";
                        area = document.querySelector(".UserN");
                        area.style.display = "none";
                        regLogButtons = document.querySelector(".RegLofBtn");
                        regLogButtons.style.display = "block";
                        rentBtn = document.querySelector(".rent");
                        ;
                        rentBtn.style.display = "none";
                        logOutBtn = document.querySelector("#logOut");
                        logOutBtn.style.display = "none";
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function checkIfConnected() {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/api/users/get-from-cookie")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    if (userDB)
                        window.location.href = ("./index.html");
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function userHomePage() {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, logOutBtn, regLogButtons, area, h3, role, userBtn, adminBtn, rentBtn, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    allCars();
                    return [4 /*yield*/, axios.get("/api/users/get-from-cookie")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    if (userDB) {
                        logOutBtn = document.querySelector("#logOut");
                        logOutBtn.style.display = "block";
                        regLogButtons = document.querySelector(".RegLofBtn");
                        regLogButtons.style.display = "none";
                        area = document.querySelector(".UserN");
                        h3 = document.createElement("h3");
                        h3.innerHTML = "Hello " + userDB.userName;
                        area.appendChild(h3);
                        role = "" + userDB.role;
                        if (role === "admin") {
                            userBtn = document.querySelectorAll("#user");
                            userBtn.forEach(function (btn) {
                                btn.style.display = "none";
                            });
                            adminBtn = document.querySelectorAll("#admin");
                            adminBtn.forEach(function (btn) {
                                btn.style.display = "block";
                            });
                        }
                        rentBtn = document.querySelector(".rent");
                        rentBtn.style.display = "block";
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.error(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function clearArea() {
    var car = document.querySelectorAll(".car");
    car.forEach(function (car) {
        car.remove();
    });
    var search = document.querySelector(".search");
    if (search)
        search.remove();
    var searchBtn = document.querySelector(".searchBtn");
    if (searchBtn)
        searchBtn.remove();
    var select = document.querySelector(".category");
    if (select)
        select.remove();
    var form = document.querySelector(".searchForm");
    if (form)
        form.remove();
    var nonePage = document.querySelector(".box1");
    nonePage.style.display = "none";
    var add = document.querySelector(".add");
    add.style.display = "none";
    var upd = document.querySelector(".update");
    upd.style.display = "none";
    var del = document.querySelector(".delete");
    del.style.display = "none";
    var noneAdminPage = document.querySelector(".adminPage");
    noneAdminPage.style.display = "none";
}
// async function allCars() {
//   try {
//     clearArea();
//     //@ts-ignore
//     const { data } = await axios.get("/api/cars");
//     const { carsDB } = data; 
//     const nonePage = document.querySelector(".box1")as HTMLDivElement;
//     nonePage.style.display = "flex";
//     carsDB.forEach(car => {
//       createAcar(car);
//     });
//   } catch (error) {
//     console.error(error)
//   }
// }
function allCars() {
    clearArea();
    //@ts-ignore
    axios
        .get("/api/cars")
        .then(function (_a) {
        var data = _a.data;
        var carsDB = data.carsDB;
        var nonePage = document.querySelector(".box1");
        nonePage.style.display = "flex";
        carsDB.forEach(function (car) {
            createAcar(car);
        });
    })["catch"](function (err) { return console.error(err); });
}
function carsBtn() {
    return __awaiter(this, void 0, void 0, function () {
        var data, carsDB, nonePage, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    clearArea();
                    return [4 /*yield*/, axios.get("/api/cars")];
                case 1:
                    data = (_a.sent()).data;
                    ;
                    carsDB = data.carsDB;
                    nonePage = document.querySelector(".box1");
                    nonePage.style.display = "flex";
                    carsDB.forEach(function (car) {
                        if ("" + car.carType === "cars") {
                            createAcar(car);
                        }
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_6 = _a.sent();
                    console.error(error_6);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function vanBtn() {
    return __awaiter(this, void 0, void 0, function () {
        var data, carsDB, nonePage, error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    clearArea();
                    return [4 /*yield*/, axios.get("/api/cars")];
                case 1:
                    data = (_a.sent()).data;
                    ;
                    carsDB = data.carsDB;
                    nonePage = document.querySelector(".box1");
                    nonePage.style.display = "flex";
                    carsDB.forEach(function (car) {
                        if ("" + car.carType == "van") {
                            createAcar(car);
                        }
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_7 = _a.sent();
                    console.error(error_7);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function commBtn() {
    return __awaiter(this, void 0, void 0, function () {
        var data, carsDB, nonePage, error_8;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    clearArea();
                    return [4 /*yield*/, axios.get("/api/cars")];
                case 1:
                    data = (_a.sent()).data;
                    ;
                    carsDB = data.carsDB;
                    nonePage = document.querySelector(".box1");
                    nonePage.style.display = "flex";
                    carsDB.forEach(function (car) {
                        if ("" + car.carType == "commercial") {
                            createAcar(car);
                        }
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_8 = _a.sent();
                    console.error(error_8);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function motoBtn() {
    return __awaiter(this, void 0, void 0, function () {
        var data, carsDB, nonePage, error_9;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    clearArea();
                    return [4 /*yield*/, axios.get("/api/cars")];
                case 1:
                    data = (_a.sent()).data;
                    ;
                    carsDB = data.carsDB;
                    nonePage = document.querySelector(".box1");
                    nonePage.style.display = "flex";
                    carsDB.forEach(function (car) {
                        if ("" + car.carType == "moto") {
                            createAcar(car);
                        }
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_9 = _a.sent();
                    console.error(error_9);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function addBtn() {
    clearArea();
    var nonePage = document.querySelector(".adminPage");
    nonePage.style.display = "block";
    var add = document.querySelector(".add");
    add.style.display = "block";
}
function updateBtn() {
    clearArea();
    var nonePage = document.querySelector(".adminPage");
    nonePage.style.display = "block";
    var upd = document.querySelector(".update");
    upd.style.display = "block";
}
function deleteBtn() {
    clearArea();
    var nonePage = document.querySelector(".adminPage");
    nonePage.style.display = "block";
    var del = document.querySelector(".delete");
    del.style.display = "block";
}
function createAcar(carData) {
    return __awaiter(this, void 0, void 0, function () {
        function clickSpan() {
            if (userDB.userRent)
                alert("You already have a car in your account");
            else
                orderPage(carData);
        }
        var area, div, span, imgOutOsStock, carName, amount, price, forClick, img, data, userDB;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    area = document.querySelector(".box1");
                    div = document.createElement("div");
                    span = document.createElement("span");
                    if (carData.carAvailabe == "0") {
                        imgOutOsStock = document.createElement("img");
                        imgOutOsStock.setAttribute("src", "https://toppng.com/uploads/preview/out-of-stock-11550257167z1lbrbidee.png");
                        span.appendChild(imgOutOsStock);
                    }
                    else {
                        carName = document.createElement("h2");
                        carName.innerHTML = "" + carData.carName;
                        amount = document.createElement("h3");
                        amount.innerHTML = "In Stock: " + carData.carAvailabe;
                        price = document.createElement("h3");
                        price.innerHTML = "Price: " + carData.carPrice + "$";
                        forClick = document.createElement("h3");
                        forClick.innerHTML = "Click for details and order";
                        span.appendChild(carName);
                        span.appendChild(amount);
                        span.appendChild(price);
                        span.appendChild(forClick);
                        span.onclick = clickSpan;
                    }
                    img = document.createElement("img");
                    img.setAttribute("src", "" + carData.carImg);
                    div.appendChild(span);
                    div.appendChild(img);
                    div.className = "car";
                    area.appendChild(div);
                    return [4 /*yield*/, axios.get("/api/users/get-from-cookie")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    return [2 /*return*/];
            }
        });
    });
}
function orderPage(car) {
    return __awaiter(this, void 0, void 0, function () {
        function order() {
            var h3_1 = document.createElement("h3");
            var h3_2 = document.createElement("h3");
            var h3_3 = document.createElement("h3");
            h3_1.innerHTML = "Your order: " + car.carName;
            var valueDays = days_1.value;
            var totalPrice = car.carPrice * Number(valueDays);
            h3_2.innerHTML = "The price for " + valueDays + " days is  " + totalPrice + "$";
            h3_3.innerHTML = "Click to confirm:";
            var okButton = document.createElement("input");
            okButton.type = "button";
            okButton.value = "Rent";
            okButton.id = "click";
            okButton.className = "ok";
            okButton.style.marginLeft = "10px";
            okButton.onclick = registerRent_1;
            var cancelBtn = document.createElement("input");
            cancelBtn.type = "button";
            cancelBtn.value = "Cancel";
            cancelBtn.id = "click";
            cancelBtn.className = "cancel";
            cancelBtn.style.marginRight = "10px";
            cancelBtn.onclick = noneSpan_1;
            span_1.appendChild(h3_1);
            span_1.appendChild(h3_2);
            span_1.appendChild(h3_3);
            span_1.appendChild(cancelBtn);
            span_1.appendChild(okButton);
            orderCar(car);
        }
        var data, userDB, clearButt, details, divImg, divRent, span_1, img, carName, amount, price, days_1, rentButton, noneSpan_1, registerRent_1, error_10;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/api/users/get-from-cookie")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    if (userDB) {
                        clearArea();
                        clearButt = document.querySelector(".box2");
                        clearButt.style.display = "none";
                        details = document.querySelector(".details");
                        divImg = document.createElement("div");
                        divRent = document.createElement("div");
                        span_1 = document.createElement("span");
                        span_1.className = "rentSpan";
                        img = document.createElement("img");
                        img.setAttribute("src", "" + car.carImg);
                        carName = document.createElement("h1");
                        carName.innerHTML = "" + car.carName;
                        amount = document.createElement("h2");
                        amount.innerHTML = "In Stock: " + car.carAvailabe;
                        price = document.createElement("h2");
                        price.innerHTML = "Price: " + car.carPrice + "$";
                        days_1 = document.createElement("input");
                        days_1.placeholder = "1";
                        days_1.className = "dayRent";
                        days_1.type = "number";
                        days_1.min = "1";
                        days_1.value = days_1.placeholder;
                        rentButton = document.createElement("input");
                        rentButton.type = "submit";
                        rentButton.value = "Rent";
                        rentButton.id = "click";
                        rentButton.className = "rent";
                        rentButton.onclick = order;
                        divImg.appendChild(img);
                        divRent.appendChild(carName);
                        divRent.appendChild(amount);
                        divRent.appendChild(price);
                        divRent.appendChild(days_1);
                        divRent.appendChild(rentButton);
                        divRent.appendChild(span_1);
                        details.appendChild(divImg);
                        details.appendChild(divRent);
                        details.style.display = "block";
                        noneSpan_1 = function () {
                            span_1.style.display = "none";
                        };
                        registerRent_1 = function () {
                            registerOrder(car);
                        };
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_10 = _a.sent();
                    console.error(error_10);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function orderCar(car) {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, span, error_11;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios.get("/api/users/get-from-cookie")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    span = document.querySelector(".rentSpan");
                    span.style.display = "block";
                    return [3 /*break*/, 3];
                case 2:
                    error_11 = _a.sent();
                    console.error(error_11);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function registerOrder(car) {
    return __awaiter(this, void 0, void 0, function () {
        var data, userDB, carAvailabe, carID, carPrice, userRent, Data, userDb, span, details, error_12;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    return [4 /*yield*/, axios.get("/api/users/get-from-cookie")];
                case 1:
                    data = (_a.sent()).data;
                    userDB = data.userDB;
                    carAvailabe = car.carAvailabe;
                    carAvailabe--;
                    carID = car._id;
                    carPrice = car.carPrice;
                    userRent = !userDB.userRent;
                    return [4 /*yield*/, axios.patch("/api/cars/" + carID, { carPrice: carPrice, carAvailabe: carAvailabe })];
                case 2:
                    Data = (_a.sent()).Data;
                    return [4 /*yield*/, axios.patch("/api/users/" + userDB._id, { userRent: userRent })];
                case 3:
                    userDb = (_a.sent()).userDb;
                    span = document.querySelector(".rentSpan");
                    span.style.display = "none";
                    details = document.querySelector(".details");
                    details.style.display = "none";
                    userHomePage();
                    return [3 /*break*/, 5];
                case 4:
                    error_12 = _a.sent();
                    console.error(error_12);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function handleAddCar(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var carType, carName, carPrice, carImg, data, error, error_13;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    ev.preventDefault();
                    carType = ev.target.elements.carType.value;
                    carName = ev.target.elements.carName.value;
                    carPrice = ev.target.elements.carPrice.value;
                    carImg = ev.target.elements.src.value;
                    return [4 /*yield*/, axios.post("/api/cars/add", {
                            carType: carType,
                            carName: carName,
                            carPrice: carPrice,
                            carImg: carImg
                        })];
                case 1:
                    data = (_a.sent()).data;
                    console.log(data);
                    error = data.error;
                    if (error)
                        throw error;
                    return [3 /*break*/, 3];
                case 2:
                    error_13 = _a.sent();
                    console.error(error_13);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleUpdateCar(event) {
    return __awaiter(this, void 0, void 0, function () {
        var carId, carPrice, carAvailabe, data, error_14;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    carId = event.target.elements.carId.value;
                    carPrice = event.target.elements.carPrice.value;
                    carAvailabe = event.target.elements.carAvailable.value;
                    return [4 /*yield*/, axios.patch("/api/cars/" + carId, { carPrice: carPrice, carAvailabe: carAvailabe })];
                case 1:
                    data = (_a.sent()).data;
                    return [3 /*break*/, 3];
                case 2:
                    error_14 = _a.sent();
                    console.log(error_14);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function handleDeleteCar(event) {
    return __awaiter(this, void 0, void 0, function () {
        var carId, data, error_15;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    carId = event.target.elements.carId.value;
                    return [4 /*yield*/, axios["delete"]("/api/cars/" + carId)];
                case 1:
                    data = (_a.sent()).data;
                    return [3 /*break*/, 3];
                case 2:
                    error_15 = _a.sent();
                    console.log(error_15);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function findBtn() {
    clearArea();
    var area = document.querySelector(".box1");
    area.style.display = "flex";
    area.style.justifyContent = "left";
    var form = document.createElement("form");
    form.className = "searchForm";
    form.onsubmit = seachSubmit;
    var category = document.createElement("select");
    category.className = "category";
    category.id = "click";
    var op1 = document.createElement("option");
    op1.value = "name";
    op1.innerHTML = "Name";
    var op2 = document.createElement("option");
    op2.value = "price";
    op2.innerHTML = "Price";
    var op3 = document.createElement("option");
    op3.value = "stock";
    op3.innerHTML = "Stock";
    category.appendChild(op1);
    category.appendChild(op2);
    category.appendChild(op3);
    var search = document.createElement("input");
    search.placeholder = "Find";
    search.className = "search";
    search.oninput = handeleSearch;
    var searchBtn = document.createElement("input");
    searchBtn.type = "submit";
    searchBtn.id = "click";
    searchBtn.className = "searchBtn";
    form.appendChild(category);
    form.appendChild(search);
    form.appendChild(searchBtn);
    area.appendChild(form);
}
function handeleSearch(event) {
    return __awaiter(this, void 0, void 0, function () {
        var carSearch, select, category, data, carDB, error_16;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    carSearch = event.target.value;
                    select = document.querySelector(".category");
                    category = select.value;
                    return [4 /*yield*/, axios.post("/api/cars/search/" + category, { carSearch: carSearch })];
                case 1:
                    data = (_a.sent()).data;
                    carDB = data.carDB;
                    console.log(carDB);
                    return [3 /*break*/, 3];
                case 2:
                    error_16 = _a.sent();
                    console.error(error_16);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function seachSubmit(event) {
    return __awaiter(this, void 0, void 0, function () {
        var select, category, search, carSearch, nonePage, data, carDB, error_17;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    select = document.querySelector(".category");
                    category = select.value;
                    search = document.querySelector(".search");
                    carSearch = search.value;
                    nonePage = document.querySelector(".box1");
                    nonePage.style.display = "flex";
                    return [4 /*yield*/, axios.post("/api/cars/search/" + category, { carSearch: carSearch })];
                case 1:
                    data = (_a.sent()).data;
                    carDB = data.carDB;
                    carDB.forEach(function (car) {
                        if ("" + car.carType === "cars") {
                            createAcar(car);
                        }
                    });
                    return [3 /*break*/, 3];
                case 2:
                    error_17 = _a.sent();
                    console.error(error_17);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
