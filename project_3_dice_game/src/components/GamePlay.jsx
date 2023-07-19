import styled from "styled-components";
import ScoreCard from "./ScoreCard";
import NumberSelector from "./NumberSelector";
import Game from "./Game";
import { useState } from "react";

const TopBar = styled.div`
  max-width: 1280px;
  height: 151px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

const Main = styled.div`
  padding-top: 20px;
`;

const GamePlay = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [score, setScore]= useState(0);
  const [error, setError]= useState("")

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getNumber = () => {
    if(!selectedNumber) {
      setError("You have not selected any number")
      return
    }
    setError("")
    const number = generateRandomNumber(1, 7);
    setCurrentDice(number);

    if(number === selectedNumber){
      setScore((prev)=>prev+number)
    }
    else{
      setScore((prev)=>prev-2)
    }

    setSelectedNumber()
  };

  const resetScore = () => {
    setScore(0)
  }

  return (
    <Main>
      <TopBar>
        <ScoreCard score={score}/>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </TopBar>
      <Game resetScore={resetScore} currentDice={currentDice} getNumber={getNumber}/>
    </Main>
  );
};

export default GamePlay;
