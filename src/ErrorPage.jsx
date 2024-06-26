import { Link } from 'react-router-dom';
import './styles/ErrorPage.css'

const ErrorPage = () => {
    return (
        <>
            <div className="ErrorPage">
                <h1>Oops!</h1>
                <h2>Sorry, an unexpected error has occurred.</h2>
                <h1>404 Not Found</h1>
                <Link to={"/"}>Back To Home</Link>
            </div>
        </>
    )
}

export default ErrorPage;