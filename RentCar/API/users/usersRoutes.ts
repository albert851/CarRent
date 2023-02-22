import express from "express";
import {updateRent, getUserByCookie, logout, register, login} from "./usersCtrl";

const router = express.Router();

router
// "/api/users"
.get("/get-from-cookie", getUserByCookie)
.get("/logout", logout)
.post("/register", register)
.post("/Login", login)
.patch("/:id", updateRent)

export default router;