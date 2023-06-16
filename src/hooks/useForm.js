import { useState } from 'react'

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)


    const onInputChange = ({target}) => {
        let {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onDeleteInfomation = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onDeleteInfomation
    }
}