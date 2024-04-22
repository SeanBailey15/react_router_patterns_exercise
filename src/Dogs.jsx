import { Link, useParams, } from "react-router-dom";
import NavBarDogs from "./NavBarDogs";

const Dogs = ({dogs}) => {
    const params = useParams()

    return (
        <>
            <NavBarDogs />
            <h1>Dogs</h1>
            {dogs.dogs.map(({name}) => <h2>{name}</h2>)}
        </>
    )
}

export default Dogs