import React from "react";
import useSWR from "swr";
import { api } from "../../assets/api";
import TodoItem, { TodoItemProps } from "../TodoItem";


import * as C from './style'

interface TodoListProps {
    data: TodoItemProps[] 
}

export default function TodoList() {

    const {data, error} = useSWR('/todo', async () => {
        const response = await api.get('/todo', {headers: {authorization: `bearer ${window.localStorage.getItem('token')}`}})
        return response.data
    })

    if (data) {
        
        return(
            <C.TodoListContainer>
                {
                   data.map( (data: TodoItemProps) => (
                        <TodoItem key={data.id} {...data} />
                    ) )
                }
            </C.TodoListContainer>
        )
    } else {
        return(
            <C.TodoListContainer>
                
            </C.TodoListContainer>
        )
    }
}