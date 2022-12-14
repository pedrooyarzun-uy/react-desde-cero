import React from 'react'
import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { Small } from './Small'

//memoriza el estado de un componente y por consecuencia no vuelve a dibujarlo si no cambian cosas de el.

export const Memorize = () => {
    
    const {increment, counter} = useCounter(10)
    const [show, setShow] = useState(true)
    return (
        <>
            <h1>Counter: <Small value={counter}/> </h1>
            <hr />

            <button 
                className='btn btn-primary'
                onClick={() => increment()}
            >
                +1
            </button>

            <button
                className='btn btn-warning'
                onClick={() => setShow(!show)}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
