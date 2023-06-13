import { useState } from 'react'
import './App.css'
import Login from './componentes/Login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login></Login>
    </>
  )
}

export default App
