import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Dogs from './Dogs'
import DogDetails from './DogDetails'
import ErrorPage from './ErrorPage'
import ColorList from './ColorList'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/dogs' element={<Dogs dogs={App.defaultProps}/>} />
      <Route path='/colors' element={<ColorList />} />
      <Route path='/dogs/:src' element={<DogDetails dogs={App.defaultProps} />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
    </>
  )
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "whiskey",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "duke",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "perry",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: "tubby",
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App
