import express from "express";
import morgan from "morgan"
import cors from "cors" 
import * as dotenv from "dotenv"
dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(cors())

app.listen(process.env.PORT)

console.log('Server is listening on port', process.env.PORT)