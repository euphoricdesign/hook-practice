import { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
    const {username, email, password, onInputChange, onDeleteInfomation} = useForm({
        username: '',
        email: '',
        password: ''
    })

    // const {username, email, password} = formState


    return (
      <>
        <h1>Form With CustomHook</h1>
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

        <input 
            type="password" 
            className="form-control mt-2"
            placeholder="Contraseña"
            name="password"
            value={ password }
            onChange={ onInputChange }
        />

        <button onClick={onDeleteInfomation} className='btn btn-primary'>Borrar</button>
       
      </>  
    )
}


