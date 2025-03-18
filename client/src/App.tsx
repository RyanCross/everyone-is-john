import { useState } from 'react'
import { Container } from "@mui/material"
import { GameLog } from './GameLog'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <GameLog />
    </Container>
  )
}

export default App
