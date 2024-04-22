import { Link } from "react-router-dom";
import './styles/Home.css'
import NavBar from "./NavBarDogs";

const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="Home-heading">
                    <h1>React Router Patterns Exercise</h1>
                </div>
                <div className="Home-dogs">
                    <p className="Home-dogs-text">Click Below For Part 1 Of The Exercise</p>
                    <button className="Home-dogs-btn">
                        <Link to="/dogs"
                            style={{textDecoration: 'none',
                            color: 'black'
                        }}                        
                        >Dog Finder</Link>
                    </button>
                </div>
                <div className="Home-colors">
                    <p className="Home-colors-text">Click Below For Part 2 Of The Exercise</p>
                    <button className="Home-colors-btn">
                        <Link to="/colors"
                            style={{textDecoration: 'none',
                            color: 'black'
                        }}                        
                        >Color Factory</Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home