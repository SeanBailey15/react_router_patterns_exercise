import { NavLink } from "react-router-dom"
import "./styles/NavBar.css"

const NavBarColors = () => {
    return (
        <nav className="NavBar-colors">
            <NavLink className="NavBar-colors-main" to="/">Home</NavLink>
            <NavLink className="NavBar-colors-main" to="/colors">Colors</NavLink>
            <NavLink className="NavBar-colors-add" to="/colors/add">Add A Color</NavLink>
        </nav>
    )
}

export default NavBarColors