import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ handleNewTodo }) => {

    const {onInputChange, onDeleteInfomation, description} = useForm({
        description: ''
    })
    
    const onFormSubmit = (e) => {
        e.preventDefault()
        
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }

        handleNewTodo(newTodo)
        onDeleteInfomation()
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="¿Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
                style={{marginLeft:0}}
            >
                Agregar
            </button>
        </form>
    )
}