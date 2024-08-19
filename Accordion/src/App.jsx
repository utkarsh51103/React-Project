import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Accrodion from "./components/Acordion";

import "./App.css";

function App() {
  // <Accrodion/>
  // <RandomColour/>
  // <StarRating noofStars={10}/>

  return (
    <div className="App">
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={"4"} />
    </div>
  );
}

export default App;
