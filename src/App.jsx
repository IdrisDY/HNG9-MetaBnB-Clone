import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Homepage } from './Components/Homepage'
import { NftShow } from './Components/NftShow'
import PurpleMockup from './Components/purpleMockup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Homepage/>
      {/* <PurpleMockup/> */}
    </div>
  )
}

export default App
