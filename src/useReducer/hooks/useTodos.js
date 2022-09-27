import {useEffect, useReducer } from 'react'
import { todoReducer } from '../todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}


export const useTodos = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, [], init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Remove todo',
            payload: id
        }
        dispatch(action)
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle todo',
            payload: id
        }
        dispatch(action)
    }
    
    return {
        todos, 
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length
    }
}
