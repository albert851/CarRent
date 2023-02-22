"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = express_1.default();
dotenv_1.default.config();
const PORT = process.env.PORT;
app.use(express_1.default.static("public"));
app.use(express_1.default.json());
mongoose_1.default.set('strictQuery', true);
const mongo_url = process.env.MONGO_URI;
mongoose_1.default.connect(mongo_url).then(res => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log("at mongoose.connect: ");
    console.log(err.message);
});
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.use(cookie_parser_1.default());
const carsRoutes_1 = __importDefault(require("./API/Cars/carsRoutes"));
app.use("/api/cars", carsRoutes_1.default);
const usersRoutes_1 = __importDefault(require("./API/users/usersRoutes"));
app.use("/api/users", usersRoutes_1.default);
app.listen(PORT, () => {
    console.log(`server is running on porrt: ${PORT}`);
});
