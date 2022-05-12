import express from 'express'
import jwt from 'jsonwebtoken'

export const isAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) {
        res.status(401).json({
            message: 'User is not authenticated'
        })
    } 
       
    try {
        const token = authorization?.split('bearer ')[1] ?? '' 
        const {id, role} = jwt.verify(token, `${process.env.PRIVATE_KEY}`)
        req.userInfo = {id, role}
        next()
        
    } catch ({message}) {
        res.status(401).json({
            message
        })
    }
    
} 