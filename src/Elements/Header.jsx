import { NavLink } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.userId)
  console.log(userId)

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'})
  }
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addMovie'>Add Movie</NavLink>
        <button onClick={e => handleLogout()}>Logout</button>
    </div>
  )
}

export default Header