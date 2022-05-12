import express from 'express'
import {object, string} from 'yup'

import db from '../database'

const createTodoSchema = object().shape({
    title: string().required(),
    description: string().nullable(),
    deadline: string().required()
})

const editeTodoSchema = object().shape({
    title: string(),
    description: string(),
    deadline: string()
})


export const createTodo = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.userInfo
        const {body} = req
        await createTodoSchema.validate(body)
        
        const newTodo = await db.todo.create({data: {
            title: body.title,
            description: body.description,
            deadline: body.deadline,
            author_id: id
        }})
        res.send(newTodo)
    } catch ({message}) {
        res.status(500).json({
            message
        })
    }
}
export const getAllTodo = async (req: express.Request, res: express.Response) => {
    try {
        const {id : userId, role} = req.userInfo

        if (role === "ADMIN") {
            const adminTodos = await db.todo.findMany({include: {user: {select: {email: true, name: true}}}})
            res.send(adminTodos)
        } else {
            const userTodos = await db.todo.findMany({where: { author_id: userId}})
            res.send(userTodos) 
        }

    } catch (error) {
        
    }
}
export const editeTodo = async (req: express.Request, res: express.Response) => {
    try {
        const {id: todoId} = req.params
        await editeTodoSchema.validate(req.body)
        const editedTodo = await db.todo.update({data: req.body, where: {id: todoId}})
        res.sendStatus(200)
    } catch ({message}) {
        res.status(500).json({message})
    }
}