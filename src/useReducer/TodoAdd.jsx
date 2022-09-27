import React from 'react'
import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {
    
    const {description, onInputChange, onResetForm} = useForm({
        description: ''
    })

    const onFormSubmit = (event) => {
        event.preventDefault()

        if(description.length <= 1) return;

        const newTodo = {
            done: false,
            id: new Date().getTime(),
            description: description
        }

        onNewTodo(newTodo)
        onResetForm()
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text"
                placeholder="Ingrese el todo..."
                className="form-control"
                name='description'
                value={description}
                onChange={onInputChange}
            />
            <button 
                type="submit"
                className="btn btn-outline-success mt-2"
            >
                Agregar Tarea
            </button>
        </form>
    )
}
