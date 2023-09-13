import { useState } from "react"
import axios from "axios"
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"


const Landing = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [register, setRegister] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleFormSubmit = e => {
        e.preventDefault() 

        axios
            .post(register ? "/api/register" : "/api/login", {
                username,
                password
            })
            .then(res => {
                console.log(res.data)
                // dispatch redux to put the userId on global state, then redirect user to home page. 
                dispatch({type: 'LOGIN', payload: res.data.userId})
                navigate('/home')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {register ? (
                <form onSubmit={e => handleFormSubmit(e)}>
                    <h1>Please register below</h1>
                    <input
                        placeholder="Enter your username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button>Submit</button>
                </form>
            ) : (
                <form onSubmit={e => handleFormSubmit(e)}>
                    <h1>Please login below</h1>
                    <input
                        placeholder="Enter your username"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <input
                        placeholder="Enter your password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button>Submit</button>
                </form>
            )}

            <button onClick={() => setRegister(!register)}>
                Need to {register ? "login?" : "register?"}
            </button>
        </>
    )
}

export default Landing
