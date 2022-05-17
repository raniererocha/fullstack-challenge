import express from 'express'
const router = express.Router()

import {createLogin, login} from './controllers/authController'
import { completeTodo, createTodo, deleteTodo, editeTodo, getAllTodo, getTodo } from './controllers/todoController'
import { isAuth } from './middlewares/isAuth'

router.post('/signup', createLogin)
router.post('/signin', login)

router.post('/todo', isAuth, createTodo)
router.get('/todo', isAuth, getAllTodo)
router.get('/todo/:id', isAuth, getTodo)
router.put('/todo/complete/:id', isAuth, completeTodo)
router.put('/todo/:id', isAuth, editeTodo)
router.delete('/todo/:id', isAuth, deleteTodo)
export default router