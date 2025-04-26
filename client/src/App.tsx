import { ComponentProps, useEffect, useState } from 'react'
import { Container, ThemeProvider } from "@mui/material"
import { GameLog } from './components/GameLog'
import { GameMasterSection } from './components/GameMasterSection'
import { Roll } from './components/Roll'
import { Voices } from './components/Voices'
import { PlayInformationArea } from './components/PlayInformationArea'

export interface Bid {
  bidId: number
  submittedPlayers: number[]
}

export interface AppProps {
  updateSrc: EventSource
}

function App(props: AppProps) {
  // useEffect to define handlers

  // const [game, setGame] = useState()

  // const useGameUpdateSrc = useEffect(() => {
  //   // why do we need an effect? handlers are defined..
  // })

  // props.updateSrc.onmessage = (ev) => {
  //   let data = JSON.parse(ev.data)
  //   setGame(data)
  // }


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
