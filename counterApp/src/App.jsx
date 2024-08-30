import './App.css'
import { useState } from 'react'

function App() {

  const [value, setValue] = useState(0);
  const increment = () => {
    setValue(value + 1)
  }
  const decrement = () => {
    setValue(value - 1)
  }

  return (
    <>
    <h1>COUNTER APPLICATION</h1>
    <h2>CURRENT COUNTER: {value}</h2>
    <button onClick={increment}>INCREMENT</button>
    <button onClick={decrement}>DECREMENT</button>
    </>
  )
}


export default App
