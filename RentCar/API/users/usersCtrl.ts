import express from "express";
import mongoose from "mongoose";
import UserModel from "./userModel";
import jwt from "jwt-simple";
import bcrypt from 'bcrypt';
const saltRounds = 12;


export async function register(req:express.Request, res:express.Response) {
    try {
        const { email, password, userName } = req.body;
        if (!email || !password ) throw new Error("Couldn't get all fields from req.body");

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);

        const userDB = new UserModel({ email, password: hash, userName });
        await userDB.save();

        const cookie = {userId: userDB._id}
        const secret = process.env.JWT_SECRET;
        if(!secret) throw new Error("Couldn't load secret from .env")

        const JWTCookie = jwt.encode(cookie, secret);

        if (userDB) {
            res.cookie("userid", JWTCookie);
            res.send({ register: true, userDB });
        } else {
            res.send({ register: false });
        }

    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function login(req, res) {
    try {
      const { email, password } = req.body;
  
      const userDB = await UserModel.findOne({ email });
      if (!userDB) throw new Error("Email name do not match");
  
      const isMatch = await bcrypt.compare(password, userDB.password);
      if(!isMatch)  throw new Error("email and password not match")
  
      const cookie = {userId: userDB._id}
      const secret = process.env.JWT_SECRET;
      if(!secret) throw new Error("Couldn't load secret from .env")
  
      const JWTCookie = jwt.encode(cookie, secret);
  
      res.cookie("userid", JWTCookie)
      res.send({ ok: true, userDB });
    } catch (error: any) {
      res.status(500).send({ error: error.message });
    }
}

export async function logout(req, res) {
  try {
    res.clearCookie("userid");
    res.send({ logout: true });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
}

export async function getUserByCookie(req: express.Request, res: express.Response) {
    try {
      const secret = process.env.JWT_SECRET;
      if(!secret) throw new Error("Couldn't load secret from .env");
  
      const { userid } = req.cookies;
      if (!userid) throw new Error("Couldn't find user from cookies");
  
      const decodedid = jwt.decode(userid, secret);
      const { userId } = decodedid;
  
      const userDB = await UserModel.findById(userId);
        if (!userDB) throw new Error(`Couldn't find user id with the id: ${userId}`);
      
      res.send({ userDB })
  
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
}

export async function updateRent(req: express.Request, res: express.Response) {
  try {
    const userRent = req.body.userRent;
    console.log(userRent)
    const userDB = await UserModel.findByIdAndUpdate(req.params.id, { userRent }, {
      new: true,
      runValidators: true,
    });
    res.send({ userDB });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
}

