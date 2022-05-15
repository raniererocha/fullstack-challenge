import React, {useState} from 'react'
import {format} from 'date-fns'

import * as C from './style'

export interface TodoItemProps {
    id: string
    title: string
    user: AuthorProps
    deadline: string
    created_at: string
    updated_at?: string | null
}
interface AuthorProps {
    name: string
}

export default function TodoItem({id, title, user, created_at, updated_at, deadline} : TodoItemProps) {
    const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false)
    return(
        <>
            <C.TodoItemContainer>
                <div>
                    <h1>{title}</h1>
                    <p>{user.name}</p>
                </div>
                <div>
                    <C.ButtonInfo onClick={(evt: any) => {
                        evt.preventDefault()
                        setIsOpenPopover(!isOpenPopover)
                    }}>i</C.ButtonInfo>
                    {isOpenPopover && <C.Popover>
                        <button>Concluir</button>
                        <button>Editar</button>
                        <button>Deletar</button>
                    </C.Popover>}
                </div>
                <p>Vencimento: <span>{format( new Date(deadline), `dd/MM/yyyy 'às' HH:mm`)}</span></p>
            </C.TodoItemContainer>
        </>
    )
}