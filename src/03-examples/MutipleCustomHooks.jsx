import { UseFetch, useCounter } from '../hooks'
import { LoadingQuote, Quote } from './'

export const MutipleCustomHooks = () => {
    const {counter, increment} = useCounter(2)
    const {data, isLoading, hasError} = UseFetch(`https://api.gameofthronesquotes.xyz/v1/random/${counter}`)

    // const {name} = !!data && data[0].character
    // const {sentence} = !!data && data[0]
    
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
