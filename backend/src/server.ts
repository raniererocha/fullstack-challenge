import express from 'express'
import cors from 'cors'
const app = express()

import router from './router'

import * as dotenv from 'dotenv'
dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/api/v1', router)

app.listen(process.env.SERVER_PORT, () => console.log('Server is Running! ' + process.env.SERVER_PORT))