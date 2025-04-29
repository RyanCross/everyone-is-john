import { useEffect, useState } from 'react'
import { GameMasterSection } from './components/GameMasterSection'
import { Voices } from './components/Voices'
import { PlayInformationArea } from './components/PlayInformationArea'

export interface Bid {
  bidId: number
  submittedPlayers: number[]
}

export interface AppProps {
  updateSrc: EventSource
  instanceId: string
}

function App() {
  const updatesUrl = `http://localhost:8080/api/game/1/updates`
  const [gmName, setGmName] = useState("")
  const [gmId, setGmId] = useState("")
  const [players, setPlayers] = useState([])

  // expectation is that useEffect is called once with these unchanging dependencies
  useEffect(() => {
    console.log("calling effect")
    // establish connection
    const gameUpdatesSource = new EventSource(updatesUrl)

    // define handlers
    gameUpdatesSource.onopen = (ev) => {
      console.log("Game Source Updates Connection opened")
      console.log(ev)
    }

    gameUpdatesSource.onmessage = (ev) => {
      const serverGameState = JSON.parse(ev.data)

      setGmName(serverGameState.gm.username)
      setGmId(serverGameState.gm.id)
      setPlayers(serverGameState.players)
      console.log("on message")
      console.log(ev)
      // so this set should update the value but it does not
    }

    gameUpdatesSource.onerror = (ev) => {
      console.log("error")
      console.log(ev)
    }

    // if platform is web, close event listener on refresh
    if (window) {
      window.addEventListener("onbeforeunload", () => {
        gameUpdatesSource.close()
      })
    }

    // effects return a cleanup function
    return () => {
      gameUpdatesSource.close()
    }

  }, [updatesUrl])



  // can initiate event source in useEffect and it will only be called once

  return (
    <>
      <GameMasterSection gmName={gmName} gmId={gmId} />
      <PlayInformationArea></PlayInformationArea>
      <Voices players={players} ></Voices>
    </>
  )
}

export default App
