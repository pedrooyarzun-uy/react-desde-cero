import { useFetch } from "../hooks/useFetch"
import {useCounter} from "../hooks/useCounter"
import { Quote } from "../03-examples/Quote"
import { LoadingQuote } from "../03-examples/LoadingQuote"

export const Layout = () => {
    
    const {increment, counter, reset, decrement} = useCounter(1)

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    

    const {author, quote} = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                isLoading
                    ? <LoadingQuote/>
                    : <Quote author={author} quote={quote}/> 
            }

            <button 
                className="btn btn-primary" 
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next Quote
            </button>
            <button 
                className="btn btn-warning" 
                onClick={() => decrement()}
                disabled={isLoading}
            >
                Previous Quote
            </button>
            <button 
                className="btn btn-danger" 
                onClick={() => reset()}
                disabled={isLoading}
            >
                Reset
            </button>
        </>
    )
}
