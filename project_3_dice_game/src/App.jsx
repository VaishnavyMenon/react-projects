import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"

function App() {
  const [isGameStated, setGameStated] = useState(false)

  const toggleGameStatus = () => {
    setGameStated(!isGameStated)
  }
  return (
    <>
    {isGameStated ? <GamePlay/> : <StartGame toggle={toggleGameStatus}/>}
    </>
  )
}

export default App
