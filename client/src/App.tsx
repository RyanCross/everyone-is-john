import { useState } from 'react'
import { Container } from "@mui/material"
import { GameLog } from './components/GameLog'
import { GameMasterSection } from './components/GameMasterSection'
import { Roll } from './components/Roll'
import { Voices } from './components/Voices'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <GameMasterSection gm="zzPodlif"/>
      <GameLog />
      <Roll></Roll>
      <Voices></Voices>
    </Container>
  )
}

export default App
