import { NavLink } from "react-router-dom"
import "./styles/NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBar-colors">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/dogs">Colors</NavLink>
        </nav>
    )
}

export default NavBar