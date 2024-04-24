import { Link } from "react-router-dom"
import NavBarColors from "./NavBarColors"

const ColorDisplay = (props) => {
    const {name, value} = props
    return (
        <>
            <NavBarColors />
            <div className="ColorDisplay" style={{backgroundColor: value}}>
                <h1>This is the color {name}!</h1>
                <h1>Isn't it awesome?!</h1>
                <Link to="/colors">Go Home</Link> 
            </div>
        </>
    )
}

export default ColorDisplay