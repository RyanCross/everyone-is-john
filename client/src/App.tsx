import { useState } from 'react'
import { Container, ThemeProvider } from "@mui/material"
import { GameLog } from './components/GameLog'
import { GameMasterSection } from './components/GameMasterSection'
import { Roll } from './components/Roll'
import { Voices } from './components/Voices'

export interface Bid {
  bidId: number
  submittedPlayers: number[]
}

function App() {
  const [count, setCount] = useState(0)
  const [bid, setBid] = useState()

  return (
      <Container>
        <GameMasterSection gm="zzPodlif" />
        <GameLog />
        <Roll></Roll>
        <Voices></Voices>
      </Container>
  )
}

export default App
