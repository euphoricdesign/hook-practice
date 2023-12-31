import { useEffect, useState } from 'react';

export const UseFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })


    const getFetch = async() => {

        // setState({
        //     ...state,
        //     isLoading: true
        // })

        const resp = await fetch(url)
        const data = await resp.json()

        setState({
            data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => {
        getFetch()
    },[url])

    return state;
}


// return {
//     data: state.data,
//     isLoading: state.isLoading,
//     hasError: state.hasError
// }

// Esta forma de retornar prioriza la fàcil lectura del còdigo en mi hook
