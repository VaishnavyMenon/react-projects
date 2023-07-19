/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";
import { useState } from "react";

const GameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 250px;
  max-height: 450px;
  margin-top: 48px;
  p {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 20px;
  }
  .dice {
    cursor: pointer;
  }
  .button_div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
`;

const Game = ({ resetScore, currentDice, getNumber }) => {
  const [showRules, setShowRules] = useState(false);
  const RuleHandler = () => {
    setShowRules(!showRules);
  };
  return (
    <div>
      <GameDiv>
        <div className="dice" onClick={getNumber}>
          <Image src={`/images/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on Dice to roll</p>
        <div className="button_div">
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button onClick={RuleHandler}>{showRules?"Hide Rules": "Show Rules"}</Button>
        </div>
      </GameDiv>
      {showRules ? <Rules /> : ""}
    </div>
  );
};

export default Game;
