import express from 'express'
const router = express.Router()

import {createLogin, login} from './controllers/authController'
import { createTodo, getAllTodo } from './controllers/todoController'
import { isAuth } from './middlewares/isAuth'

router.post('/signup', createLogin)
router.post('/signin', login)

router.post('/todo', isAuth, createTodo)
router.get('/todo', isAuth, getAllTodo)

export default router