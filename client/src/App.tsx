import { useState } from 'react'
import { Container, ThemeProvider } from "@mui/material"
import { GameLog } from './components/GameLog'
import { GameMasterSection } from './components/GameMasterSection'
import { Roll } from './components/Roll'
import { Voices } from './components/Voices'
import { PlayInformationArea } from './components/PlayInformationArea'
import { sdk } from './sdk/GameServerSdk'

export interface Bid {
  bidId: number
  submittedPlayers: number[]
}

async function App() {  
  const [count, setCount] = useState(0)
  const [bid, setBid] = useState()

  return (
      <>
        <GameMasterSection gm="zzPodlif" />
        <PlayInformationArea></PlayInformationArea>
        <Voices></Voices>
      </>
  )
}

export default App
