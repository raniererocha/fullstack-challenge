import express from 'express'
import {boolean, object, string} from 'yup'

import db from '../database'

const createTodoSchema = object().shape({
    title: string().required(),
    description: string().nullable(),
    deadline: string().required()
})

const editeTodoSchema = object().shape({
    title: string(),
    description: string(),
    deadline: string(),
    isComplete: boolean().notRequired()
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
            const userTodos = await db.todo.findMany({where: { author_id: userId}, include: { user: { select: { name: true} } } })
            res.send(userTodos) 
        }

    } catch ({message}) {
        res.status(500).json({message})
    }
}
export const getTodo = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params
        const todo = await db.todo.findFirst({where: { id }})
        res.json(todo)
    } catch ({message}) {
        res.status(500).json({message})
    }
}
export const editeTodo = async (req: express.Request, res: express.Response) => {
    try {
        const {id: todoId} = req.params
        await editeTodoSchema.validate(req.body)
        const {title, description, deadline, isComplete} = req.body
        await db.todo.update({data: {title, description, deadline, isComplete}, where: {id: todoId}})
        return res.send({message: 'Ok'})
    } catch ({message}) {
        return res.status(500).json({message})
    }
}

export const deleteTodo = async (req: express.Request, res: express.Response) => {
    try {
        const {id: todoId} = req.params
        await db.todo.delete({where: { id: todoId}})
    } catch ({message}) {
        res.status(500).json({message})
    }
}
export const completeTodo = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params
        await db.todo.update({data: {isComplete: true}, where: {id}})
        return res.status(200).json({message: 'Ok'})
    } catch ({message}) {
        return res.status(500).json({message})
    }
}