import { useState } from 'react'
import { Formulario } from './formulario/formulario'
import { Galerias } from './views/Galeria'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario />
      <h1>Pokemones</h1>
      <p>Explora los pokemones</p>
      <Galerias/>
    </>
  )
}

export default App
