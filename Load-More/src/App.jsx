import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loadmore from './components/loadmore'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Loadmore/>
    </>
  )
}

export default App
