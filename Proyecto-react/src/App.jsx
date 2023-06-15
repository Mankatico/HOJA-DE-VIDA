import { useState } from 'react';
import './App.css';
import Login from './componentes/Login/Login.jsx';
import Register from './componentes/register/register';
import Header from './componentes/Header/header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    </>
  )
}

export default App
