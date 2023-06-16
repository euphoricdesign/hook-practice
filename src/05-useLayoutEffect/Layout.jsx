import { UseFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from '../03-examples'

export const Layout = () => {
    const {counter, increment} = useCounter(2)
    const {data, isLoading, hasError} = UseFetch(`https://api.gameofthronesquotes.xyz/v1/random/${counter}`)
    
    return (
        <>
            <h1>Game of Thrones quotes</h1>
            <hr />

            {
                isLoading 
                    ? <LoadingQuote />
                    : <Quote data={data}/>      
            }

            <button 
                className='btn btn-primary'
                disabled= {isLoading}
                onClick={() => increment()}
            >
                Show {counter + 1} random quotes
            </button>
        </>
    )
}

