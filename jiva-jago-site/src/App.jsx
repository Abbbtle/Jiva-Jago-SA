import { useState } from 'react'
import { Navbar, Hero1, Footer } from './components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App
