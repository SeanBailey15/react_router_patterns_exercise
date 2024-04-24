import { useState } from "react";
import { Link } from "react-router-dom"
import NavBarColors from "./NavBarColors";



const ColorList = () => {
    const INITIAL_STATE = [
        {
            name: 'red',
            value: 'rgb(255, 0, 0)'
        },
        {
            name: 'green',
            value: 'rgb(0, 255, 0'
        },
        {
            name: 'blue',
            value: 'rgb(0, 0, 255)'
        }
    ]
    const [colors, setColors] = useState(INITIAL_STATE)

    
    return (
        <>
        <NavBarColors />
        <div className="ColorList">
            <h1>Check Out These Colors! Wow!</h1>
            <div className="ColorList-list">
                {colors.map((color) => (
                    <Link to={`/colors/${color.name}`}>{color.name}</Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default ColorList
