import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'


export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
      () => {
          setCounter((value) => value+ 1)
      },
      [],
    )
    
    console.log('Im rendering :(')
    return (
        <>
            <h1>Use Callback Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather}/>
        </>
        
    )
}
