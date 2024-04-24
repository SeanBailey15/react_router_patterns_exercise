import { NavLink } from "react-router-dom"
import { v4 as uuid } from "uuid"
import "./styles/NavBar.css"

const NavBarDogs = ({dogs}) => {
    return (
        <nav className="NavBar-dogs">
            <NavLink className="NavBar-dogs-main" to="/">Home</NavLink>
            <NavLink className="NavBar-dogs-main" to="/dogs">Dogs</NavLink>
            <div className="NavBar-dogs-link-group">
            {dogs.map((dog) => 
                <NavLink key={uuid()}  className="NavBar-dogs-link" to={`/dogs/${dog.src}`}>{dog.name}</NavLink>
            )}
            </div>
        </nav>
    )
}

export default NavBarDogs