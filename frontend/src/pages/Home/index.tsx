import React, { useState } from 'react'
import useSWR , {useSWRConfig} from 'swr'
import { api } from '../../assets/api'

import Menu from '../../components/Menu'
import TodoList from '../../components/TodoList'
import Modal from '../../components/Modal'

import * as C from './style'
import { format } from 'date-fns'

export default function Home() {

    const { mutate } = useSWRConfig()


    const [isModalOpen, setModalOpen] = useState<boolean>(false)

    const [errorModalIsOpen, setErrorModalIsOpen] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

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
                mutate('/todo')

                setTodoTitle('')
                setTodoDeadline('')
                setTodoDescription('')
                setModalOpen(false)

            } else {

                setErrorMessage('Fill in all fields')
                setErrorModalIsOpen(true)

            }


        } catch (error: any) {

            setErrorMessage(error.response.data.message)
            setErrorModalIsOpen(true)

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
                        <C.HomeInputForm type="datetime-local" min={format(new Date(), "yyyy-MM-dd'T'HH:mm")} placeholder='Prazo' value={todoDeadline} onChange={(evt: any) => setTodoDeadline(evt.target.value)} />
                        <C.HomeBtn onClick={handleCreateTodo} >Adicionar Todo</C.HomeBtn>
                    </C.HomeForm>
                </Modal>
                
            }
            {
                errorModalIsOpen && <Modal modalController={() => setErrorModalIsOpen(false)}>
                    <div style={{backgroundColor: '#ccc', padding: '2rem'}}>
                        <h1>Ops aconteceu um probleminha...</h1>
                        <p style={{marginTop: '1.5rem'}}>{errorMessage}</p>
                    </div>
                </Modal>
            }
        </C.HomeContainer>
    )
}