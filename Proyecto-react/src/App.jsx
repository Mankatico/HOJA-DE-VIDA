import { useState } from 'react';
import './App.css';;
import Navbar from './componentes/Navbar/Navbar';
import Principal from './componentes/Principal/Principal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Principal></Principal>
    </>
  )
}

export default App
