import mongoose from 'mongoose'
import dotenv from 'dotenv'
import foodData from './data/FoodData.js'
import foodModel from './models/foodModel.js'


import connectDB from './config/db.js'

dotenv.config()
connectDB()

//Добавлении данных в базу через скрипты
const importfoodData = async () =>{
    try{
     
       const sampleProducts = foodData.map(words =>{
           return {...words}
       })
       console.log(sampleProducts)
       await foodModel.insertMany(sampleProducts)

       console.log('Data Imported!')
       process.exit()
    } catch (error){
console.error(`${error}`)
process.exit(1)
    }
}
if (process.argv[2] ==='-w'){
    importfoodData()
} 

const deleteFoodData = async () =>{
    try{
       
        await foodModel.deleteMany()

       process.exit()
    } catch (error){
console.error(`${error}`.red.inverse)
process.exit(1)
    }
}
if (process.argv[2] ==='-d'){
    deleteFoodData()
} 