import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StarRating from "../../StarRating/src/components/start-rating";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <StarRating noofStars={10}/>
        </div>
    </>
  )
}

export default App
