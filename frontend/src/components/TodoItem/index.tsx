import React, { useState, useEffect } from 'react'
import { format, isAfter } from 'date-fns'

import * as C from './style'
import Modal from '../Modal'
import useSWR, {mutate, useSWRConfig} from 'swr'
import { api } from '../../assets/api'

export interface TodoItemProps {
    id: string
    title: string
    user: AuthorProps
    deadline: string
    description: string
    created_at: string
    isComplete: boolean
    updated_at?: string | null
}
interface AuthorProps {
    name: string
}

export default function TodoItem({ id, title, user, description ,created_at, updated_at, deadline, isComplete }: TodoItemProps) {
    
    const {mutate} = useSWRConfig()

    const isLate = isComplete ? false : isAfter(new Date(), new Date(deadline))
    
    const [isLateTodo, setIsLateTodo] = useState<boolean>(isLate)
    const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false)
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
    const [isCompleteModal, setIsCompleteModal] = useState<boolean>(false)
    const [currentId, setCurrentId] = useState<string>('')

    return (
        <>
            <C.TodoItemContainer isAfter={isLateTodo} isComplete={isComplete}>
                <div>
                    <h1>{title}</h1>
                    {
                        isLate && <p><strong>{isComplete ? "" : "Atrasado!"}</strong></p>
                    }
                    {
                        isComplete && <p><strong>{isLate ? "" : "Completo!"}</strong></p>
                    }
                    <p>{user.name}</p>
                </div>
                <div>
                    <C.ButtonInfo onClick={(evt: any) => {
                        evt.preventDefault()
                        setIsOpenPopover(!isOpenPopover)
                    }}>i</C.ButtonInfo>
                    {isOpenPopover && <C.Popover>
                        {
                            !isComplete &&
                           <button onClick={(evt: any) => {
                            evt.preventDefault()
                            setIsOpenPopover(false)
                            setIsCompleteModal(true)
                            setCurrentId(id)
                            setIsLateTodo(false)
                            }}>Concluir</button> 
                        }
                        {
                            !isComplete && <button onClick={(evt: any) => {
                                evt.preventDefault()
                                setIsOpenPopover(false)
                                setIsOpenModal(true)
                                setCurrentId(id)
                            }} >Editar</button> 
                        }
                        <button
                            onClick={ async (evt: any) => {
                                evt.preventDefault()
                                setIsOpenPopover(false)
                                await api.delete(`/todo/${id}`, { headers: { authorization: `bearer ${window.localStorage.getItem('token')}` } })
                                mutate('/todo')
                            } }
                        >Deletar</button>
                    </C.Popover>}
                </div>
                <p>Vencimento: <span>{format(new Date(deadline), `dd/MM/yyyy 'às' HH:mm`)}</span></p>

            </C.TodoItemContainer>
            {
                isOpenModal && <Modal modalController={() => setIsOpenModal(false)}>
                    <EditeModal id={currentId} />
                </Modal>
            }
            {
                isCompleteModal && <Modal modalController={() => setIsCompleteModal(false)}>
                    <C.EditeItemForm>
                        <h1>Você tem certeza?</h1>
                        <p>Ao clicar em sim você concorda em concluir a tarefa e não poderar editar novamente esse todo</p>
                        <div>
                        <C.BtnEditeItem onClick={ async (evt: any) => {
                            evt.preventDefault()
                            try {
                                await api.put(`/todo/complete/${id}`, {isComplete: true}, { headers: { authorization: `bearer ${window.localStorage.getItem('token')}` } })
                                setIsCompleteModal(false)
                                mutate('/todo')
                            } catch (error: any) {
                                console.log(error.message)
                            }
                        } }>Sim</C.BtnEditeItem>
                        <C.BtnEditeItem isNegative onClick={(evt: any) => {
                            evt.preventDefault()
                            setIsCompleteModal(false)
                        }} >Não</C.BtnEditeItem>
                        </div>
                    </C.EditeItemForm>
                </Modal>
            }
        </>
    )
}

interface EditeModalProps {
    id: string
}

function EditeModal({ id }: EditeModalProps) {
    const { mutate } = useSWRConfig()
    const { data } = useSWR(`/todo/${id}`, async () => {

        const response = await api.get(`/todo/${id}`, { headers: { authorization: `bearer ${window.localStorage.getItem('token')}` } })
        return response.data

    }, { errorRetryCount: 2, shouldRetryOnError: true })

    const handleEditeTodo = async (evt: any) => {
        evt.preventDefault()
        try {
            const editedData = {
                title: todoTitle,
                description: todoDescription,
                deadline: new Date(todoDeadline)
            }
            await api.put(`/todo/${id}`, editedData, { headers: { authorization: `bearer ${window.localStorage.getItem('token')}` } })
            mutate('/todo')
        } catch (message) {
            console.log(message)
        }
    }

    const [todoTitle, setTodoTitle] = useState<string>('')
    const [todoDescription, setTodoDescription] = useState<string>('')
    const [todoDeadline, setTodoDeadline] = useState<string>('')

    useEffect(() => {
        if (data) {
            setTodoDeadline(format(new Date(data.deadline), "yyyy-MM-dd'T'HH:mm"))
            setTodoTitle(data.title)
            setTodoDescription(data.description)
        }
    }, [data])

    if (!data) {
        return (
            <C.EditeItemForm>
                <h1>Carregando...</h1>
            </C.EditeItemForm>
        )
    }

    return (
        <C.EditeItemForm>
            <h1>Editar Todo</h1>
            <C.EditeItemInput type='text' placeholder="Título" value={todoTitle} onChange={(evt: any) => setTodoTitle(evt.target.value)} />
            <C.EditeItemInput type="text" placeholder='Descrição' value={todoDescription} onChange={(evt: any) => setTodoDescription(evt.target.value)} />
            <C.EditeItemInput type="datetime-local" min={format(new Date(), "yyyy-MM-dd'T'HH:mm")} value={todoDeadline} onChange={(evt: any) => setTodoDeadline(evt.target.value)} />
            <C.BtnEditeItem onClick={handleEditeTodo} >Adicionar Todo</C.BtnEditeItem>
        </C.EditeItemForm>
    )

}