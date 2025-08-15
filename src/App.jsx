import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('Njika Godwin')

  return (
    <div>
        <h1>
          Introduction to React Lesson 
        </h1>

        <p>
          Tutor: {name}
        </p>
    </div>
  )
}

export default App
