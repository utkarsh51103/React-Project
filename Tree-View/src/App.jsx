import menus from './Components/data'
import TreeView from './Components/index'

function App() {
  return (
    <div className='App'>
      <TreeView menus={menus}/>
    </div>
  )
}

export default App
