import express from "express";
import mongoose from "mongoose";
import CarModel from "./carModel";
import jwt from "jwt-simple";
import { error } from "console";


export async function getAllCars(req: express.Request, res: express.Response) {
    try {
        const carsDB = await CarModel.find();
        res.send({ carsDB });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export async function addCar(req: express.Request, res: express.Response) {
    try {
        const { carType, carName, carPrice, carImg } = req.body;
        if (!carType || !carName || !carPrice) throw new Error("Couldn't get all fields from req.body");

        console.log({ carType, carName, carPrice, carImg })
        const carDB = new CarModel({ carType, carName, carPrice, carImg });
        await carDB.save();

        const cookie = { carId: carDB._id }
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env")

        const JWTCookie = jwt.encode(cookie, secret);

        if (carDB) {
            res.cookie("carid", JWTCookie);
            res.send({ addCar: true, carDB });
        } else {
            res.send({ addCar: false });
        }

    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function updateCarById(req: express.Request, res: express.Response) {
    try {
        const { carPrice, carAvailabe } = req.body;
        const carDB = await CarModel.findByIdAndUpdate(req.params.id, { carPrice, carAvailabe }, {new: true, runValidators: true});
        res.send({ carDB });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export async function deleteCarById(req: express.Request, res: express.Response) {
    try {
        console.log(req.params.id)
        const carDB = await CarModel.findByIdAndDelete(req.params.id);
        res.send({ carDB });
    } catch (error) {
        
    }
}

export async function searchFromDB(req: express.Request, res: express.Response) {
    try {
        const category = req.params.category;
        const {carrSearch} = req.body;
        const pattern = RegExp(carrSearch)

        if(category === "name"){
            const carDB = await CarModel.find({'carName': {$regex: pattern}});
            res.send({carDB});
        }
        else if(category == "price"){
            const carDB = await CarModel.find({'carPrice': {$regex: Number(pattern)}});
            res.send({carDB});
        }
        else {
            const carDB = await CarModel.find({'carAvailabe': {$regex: Number(pattern)}});
            res.send({carDB});
        }
            
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
