import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {

    const {user, setUser} = useContext(UserContext)
    
    const handleChange = () => {
        setUser({
            id: 456,
            name: 'Merlina',
            email: 'mer@google.com'
        })
    }

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button className="btn btn-primary" onClick={handleChange}>Change user</button>
        </>
    )
}