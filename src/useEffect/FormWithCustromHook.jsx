import React from 'react'
import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'


export const FormWithCustomHook = () => {
    
    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    })

    //const {username, email, password} = formState

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
            <h1>Formulario Con Custom Hook</h1>
            <hr />
            <input 
                type="text" 
                className='form-control'
                placeholder='Usuario...'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="text" 
                className='form-control mt-2'
                placeholder='Email...'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input 
                type="password" 
                className='form-control mt-2'
                placeholder='Contraseña...'
                name='password'
                value={password}
                onChange={onInputChange}
            />
            <button className='btn btn-primary mt-2' onClick={onResetForm}>Reset</button>
        </>
        

    )
}
