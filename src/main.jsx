import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'


// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MutipleCustomHooks } from './03-examples/MutipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memo/Memorize'
// import { MemoHook } from './06-memo/MemoHook'
// import { CallbackHook } from './06-memo/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'
// import { TodoApp } from './08-useReducer/TodoApp'

import { MainApp } from './09-useContext/MainApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <SimpleForm />
    </BrowserRouter>
 
)
