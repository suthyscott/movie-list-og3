import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { useEffect } from "react"

const Header = () => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.userId)

    useEffect(() => {
        axios
            .get("/api/user")
            .then(res => dispatch({ type: "LOGIN", payload: res.data.userId }))
            .catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        axios
            .delete("/api/logout")
            .then(res => dispatch({ type: "LOGOUT" }))
            .catch(err => console.log(err))
    }

    return (
        <>
            {userId ? (
                <nav>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/addMovie">Add Movie</NavLink>
                    <button onClick={handleLogout}>Logout</button>
                </nav>
            ) : null}
        </>
    )
}

export default Header
