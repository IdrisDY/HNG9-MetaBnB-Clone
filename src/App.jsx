import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Homepage } from './Components/Homepage'
import { NftShow } from './Components/NftShow'
import PurpleMockup from './Components/purpleMockup'
import Header from './Components/Reusable/Header'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className="App">
        <Header/> 
      <Routes>
        <Route path='/' element={ <Homepage/>}/>
        <Route path='/places' element={ <NftShow/>}/>
      </Routes>
      {/* <PurpleMockup/> */}
    </div>
          </Router>
  )
}

export default App
