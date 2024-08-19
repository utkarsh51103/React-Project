import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ImageSlider from "../../ImageSlider/src/components/image-slider";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={"4"} />
    </>
  )
}

export default App
