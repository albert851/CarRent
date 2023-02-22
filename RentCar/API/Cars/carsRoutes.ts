import express from "express";
import { searchFromDB, deleteCarById, updateCarById, addCar, getAllCars } from "./carsCtrl";

const router = express.Router();

router
// "/api/cars"
.get("", getAllCars)
.post("/add", addCar)
.post("/search/:category", searchFromDB)
.patch("/:id", updateCarById)
.delete("/:id", deleteCarById)

export default router;