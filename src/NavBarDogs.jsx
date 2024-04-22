import { NavLink } from "react-router-dom"
import "./styles/NavBar.css"

const NavBarDogs = () => {
    return (
        <nav className="NavBar-dogs">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dogs">Dogs</NavLink>
        </nav>
    )
}

export default NavBarDogs