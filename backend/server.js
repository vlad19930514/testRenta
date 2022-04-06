import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'

import path from 'path'
import foodRoutes from './routes/foodRoutes.js'

dotenv.config()
connectDB() 

const app = express()



app.use(cors())


app.use('/food',foodRoutes)


const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')))
  
  app.get('*', (req,res)=>
      res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'))
  )
} else {
  app.get('/', (req,res)=>{
    res.send('api is running')
})
}

const PORT = process.env.PORT || 5003

app.listen(PORT, console.log(`server on ${PORT}`))