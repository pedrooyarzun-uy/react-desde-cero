import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'pedro',
        email: 'pedro@pedro.com'
    })
    
    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target 
        setFormState({
            ...formState,
            [name]: value
        })
    } 

    useEffect(() => {
        //console.log('Se muestra solo en el primer render de la pagina')
    }, [])

    useEffect(() => {
        //console.log('Se muestra solo cuando cambia el formstate')
    }, [formState])

    useEffect(() => {
        //console.log('Se muestra cuando cambia el email')
    }, [email])
    


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text" 
                className='fomr-control'
                placeholder='Usuario...'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <br />
            <input 
                type="text" 
                className='fomr-control mt-2'
                placeholder='pedro@pedro.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            {
                (username == 'pedro') && <Message/>
            }
            
        </>
        

    )
}
