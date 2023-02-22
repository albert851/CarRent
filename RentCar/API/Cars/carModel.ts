
import Joi, { boolean } from "joi";
import { date } from "joi";
import mongoose from "mongoose";


const CarsSchema = new mongoose.Schema({
    carType: { 
        type: String,
        enum: ['cars', 'van', 'commercial', 'moto'],
       },
    carName: String,
    carPrice: Number,
    carAvailabe: {
        type: Number,
        default: 3
    },
    carImg: String,
});


const UserModel = mongoose.model("cars", CarsSchema);

export default UserModel;