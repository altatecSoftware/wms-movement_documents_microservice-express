import express from "express";
import morgan from "morgan"
import cors from "cors" 
import router from './routes/index'
//Dotenv configuration 
import * as dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(router)
app.use(morgan('dev'))
app.use(cors())

export default app