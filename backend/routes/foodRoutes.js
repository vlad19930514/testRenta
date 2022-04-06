import express from 'express'
import asyncHandler from 'express-async-handler'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

import mongoose from 'mongoose'
const router = express.Router()
import Food from '../models/foodModel.js'
import {foodData} from '../data/FoodData.js'



import connectDB from '../config/db.js'
dotenv.config()
connectDB()

//lists

router.get('/',asyncHandler( async (req,res)=>{
    const food =await Food.find({})
    res.json(food)
}))
router.post('/sent-cart',asyncHandler( async (req,res)=>{
   function resp() {
        console.log('чего-то ждем')
        res.json(true)
    }
   
setTimeout(resp, 2000);



}))





export default router

