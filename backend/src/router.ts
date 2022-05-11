import express from 'express'
const router = express.Router()

router.post('/', (req : express.Request, res : express.Response) => {
    res.send({
        ola: "mundo"
    })
})

export default router