import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RandomColour from "../../ColourGenerator/src/components/Random-Colour";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomColour/>
    </>
  )
}

export default App
