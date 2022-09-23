import { useFetch } from "../hooks/useFetch"
import {useCounter} from "../hooks/useCounter"

export const MultipleCustomHooks = () => {
    
    const {increment, counter, reset, decrement} = useCounter(1)

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    

    const {author, quote} = !!data && data[0]

    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr/>

            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    ) : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-2">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                        </blockquote>
                    )
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
