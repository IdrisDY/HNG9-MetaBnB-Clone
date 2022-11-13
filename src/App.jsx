import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Homepage } from './Components/Homepage'
import { NftShow } from './Components/NftShow'
import PurpleMockup from './Components/purpleMockup'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={ <Homepage/>}/>
        <Route path='/nfts' element={ <NftShow/>}/>
      </Routes>
      </Router>
      {/* <PurpleMockup/> */}
    </div>
  )
}

export default App
