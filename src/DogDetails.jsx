import { useParams } from "react-router-dom"
import {v4 as uuid} from 'uuid'
import NavBarDogs from "./NavBarDogs"
import ErrorPageDogs from "./ErrorPageDogs"

const DogDetails = (props) => {
    const { dogs } = props.dogs
    const params = useParams()
    for (let dog of dogs) {
        if (dog.src === params.src) {
            return (
                <>
                    <NavBarDogs dogs={dogs} />
                    <div className="DogDetails">
                        <h1 className="DogDetails-name">
                            {dog.name}
                        </h1>
                        <h2 className="DogDetails-age">
                            {dog.age}
                        </h2>
                        {dog.facts.map((fact) => ( 
                            <h3 key={uuid()} className="DogDetails-fact">
                                {fact}
                            </h3>                           
                        ))}
                    </div>
                </>
            )
        }
    }
    return <ErrorPageDogs dogs={dogs} />



}

export default DogDetails