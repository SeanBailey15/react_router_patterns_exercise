import NavBar from './NavBarDogs';
import './styles/ErrorPage.css'

const ErrorPage = () => {
    return (
        <>
            <NavBar />
            <div className="ErrorPage">
                <h1>Oops!</h1>
                <h2>Sorry, an unexpected error has occurred.</h2>
                <h1>404 Not Found</h1>
            </div>
        </>
    )
}

export default ErrorPage;