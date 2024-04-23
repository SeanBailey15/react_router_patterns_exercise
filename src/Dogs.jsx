import NavBarDogs from "./NavBarDogs";

const Dogs = (props) => {
    const { dogs } = props.dogs

    return (
        <>
            <NavBarDogs dogs={dogs}/>
            <div className="Dogs">
                <h1>Learn About Our Furry Friends!</h1>
                <h2>Click A Link In The NavBar To Learn More</h2>
            </div>
        </>
    )
}

export default Dogs