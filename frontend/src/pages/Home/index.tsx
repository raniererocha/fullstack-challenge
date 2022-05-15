import React, { useState } from 'react'
import useSWR from 'swr'
import { api } from '../../assets/api'

import Menu from '../../components/Menu'
import TodoList from '../../components/TodoList'
import Modal from '../../components/Modal'

import * as C from './style'

export default function Home() {


    const [isModalOpen, setModalOpen] = useState<boolean>(false)

    const [todoTitle, setTodoTitle] = useState<string>('')
    const [todoDescription, setTodoDescription] = useState<string>('')
    const [todoDeadline, setTodoDeadline] = useState<string>('')

    const handleCreateTodo = async (evt: any) => {
        evt.preventDefault()
        try {
            const data = {
                title: todoTitle,
                description: todoDescription,
                deadline: new Date(todoDeadline)
            }
            if (todoDeadline && todoDescription && todoTitle) {
                const response = await api.post('/todo', data, { headers: { authorization: `bearer ${window.localStorage.getItem('token')}` } })

                setTodoTitle('')
                setTodoDeadline('')
                setTodoDescription('')
                setModalOpen(false)
            } else {
                alert('Preencha todos os campos')
            }


        } catch (error: any) {
            alert(error.response.data.message)
        }
    }

    return (
        <C.HomeContainer>
            <Menu />
            <C.HomeAddItem onClick={(evt: any) => {
                evt.preventDefault()
                setModalOpen(true)
            }} >+</C.HomeAddItem>
            <TodoList />
            {
                isModalOpen &&
                <Modal modalController={() => setModalOpen(false)} >
                    <C.HomeForm>
                        <h1>Cadastrar Todo</h1>
                        <C.HomeInputForm type='text' placeholder="Título" value={todoTitle} onChange={(evt: any) => setTodoTitle(evt.target.value)} />
                        <C.HomeInputForm type="text" placeholder='Descrição' value={todoDescription} onChange={(evt: any) => setTodoDescription(evt.target.value)} />
                        <C.HomeInputForm type="datetime-local" min={`${new Date()}`} placeholder='Prazo' value={todoDeadline} onChange={(evt: any) => setTodoDeadline(evt.target.value)} />
                        <C.HomeBtn onClick={handleCreateTodo} >Adicionar Todo</C.HomeBtn>
                    </C.HomeForm>
                </Modal>
            }
        </C.HomeContainer>
    )
}