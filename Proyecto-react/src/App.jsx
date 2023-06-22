import { useState } from 'react';
import './App.css';;
import Navbar from './componentes/Navbar/Navbar';
import Principal from './componentes/Principal/Principal';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='body'>
    <Navbar></Navbar>
    <Principal></Principal>
    </div>
    </>
  )
}

export default App
