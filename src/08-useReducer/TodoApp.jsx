import { useTodo } from '../hooks/useTodo'
import { TodoList, TodoAdd } from './'

export const TodoApp = () => {
    const {todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, todosPending} = useTodo()

    return (
        <>
            <h1>TodoApp {todosCount}, <small>Pendientes: {todosPending} </small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={todos} 
                        handleDeleteTodo={handleDeleteTodo} 
                        handleToggleTodo={handleToggleTodo}
                    />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={handleNewTodo}/>
                </div>
            </div>

        </>
    )
}