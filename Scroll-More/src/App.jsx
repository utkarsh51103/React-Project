import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scroll from './components/Scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Scroll url={'https://dummyjson.com/products?limit=100'}/>
    </>
  )
}

export default App
