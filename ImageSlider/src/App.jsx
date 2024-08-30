import ImageSlider from "../../ImageSlider/src/components/image-slider";
import './App.css'

function App() {

  return (
    <>
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={"8"} />
    </>
  )
}

export default App
