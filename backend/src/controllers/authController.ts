import express from 'express'
import db from '../database'

import { object, string } from 'yup'
import { hashSync, compareSync } from 'bcrypt'

import jwt from 'jsonwebtoken'

import { config } from 'dotenv'
config({ path: '../../.env' })

const createUserSchema = object().shape({
    email: string().required().email(),
    name: string().required(),
    password: string().required()
})
const loginSchema = object().shape({
    email: string().required().email(),
    password: string().required()
})
export const createLogin = async (req: express.Request, res: express.Response) => {
    const { body } = req
    try {
        await createUserSchema.validate(body)
        const newUser = await db.user.create({
            data: {
                email: body.email,
                password: hashSync(body.password, 10),
                name: body.name
            }
        })
        const { id, role, name } = newUser
        const token = jwt.sign({ id, role }, `${process.env.PRIVATE_KEY}`, {expiresIn: '2h'})
        return res.status(200).json({
            name,
            token
        })

    } catch ({ message }) {
        res.status(401).json({
            message: message
        })
    }
}
export const login = async (req: express.Request, res: express.Response) => {
    try {

        await loginSchema.validate(req.body)
        const { email, password: clientPassword } = req.body
        const user = await db.user.findFirst({ where: { email } })
        const isSamePassword = user ? compareSync(clientPassword, user.password) : false

        if (isSamePassword && user) {
            const {id, role, name} = user
            const token = jwt.sign({ id, role }, `${process.env.PRIVATE_KEY}`, {expiresIn: '2h'})
            return res.status(200).json({
                name,
                token
            })
        } else {
            res.status(401).json({
                message: "invalid email or password"
            })
        }
        res.send(user)
    } catch ({ message }) {
        res.status(401).json({
            message: message
        })
    }
}