import React, { useMemo } from 'react'
import { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterationNumber = 100) => {
    for (let i=0; i < iterationNumber; i++){
        console.log('Printing...')
    }

    return `${iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
    
    const {increment, counter} = useCounter(4000)
    const [show, setShow] = useState(true)
    
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])
    return (
        <>
            <h1>Counter: <small> {counter} </small> </h1>
            <hr />

            <h4>{memorizedValue}</h4>

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
