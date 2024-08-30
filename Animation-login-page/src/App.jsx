import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Signin from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
    <div>
        <Signin/>
        <SignUp/>
      </div>
    </>
  );
}

export default App;
