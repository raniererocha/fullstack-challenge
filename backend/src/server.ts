import express from 'express'
const app = express()

import router from './router'

import * as dotenv from 'dotenv'
dotenv.config()

app.use(express.json())
app.use('/api/v1', router)

app.listen(process.env.PORT, () => console.log('Server is Running!'))