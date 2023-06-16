import { useEffect, useState, useLayoutEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Merlina',
        email: 'merlina@gmail.com'
    })

    const {username, email} = formState

    const onInputChange = ({target}) => {
        const {name, value} = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect( () => {
        console.log('useEffect called!');
    }, []);
    

    useLayoutEffect( () => {
        console.log('useLayoutEffect called!');
    }, []);

    useEffect( () => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!');
    }, [ email ]);


    return (
      <>
        <h1>Simple Form</h1>
        <hr />

        <input 
            type="text" 
            className='form-control'
            placeholder='username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            className='form-control mt-3'
            placeholder='email'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        {
         (username === 'Merlina2') && <Message />   
        }
      </>  
    )
}


