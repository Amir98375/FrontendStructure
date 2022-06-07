import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { AllRoutes } from './components/Allroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <AllRoutes/>
    </div>
  )
}

export default App
