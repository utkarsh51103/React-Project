import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Accrodion from './components/Acordion'
import RandomColour from './components/Random-Colour'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Accrodion/>
      <RandomColour/>
    </div>
  )
}

export default App
