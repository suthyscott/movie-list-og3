import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addMovie'>Add Movie</NavLink>
    </div>
  )
}

export default Header