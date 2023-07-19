/* eslint-disable react/prop-types */
import styled from "styled-components";

const TotalScore = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  h1 {
    font-size: 80px;
    line-height: 90px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const ScoreCard = ({score}) => {
  return (
    <TotalScore>
          <h1>{score}</h1>
          <p>Total Score</p>
    </TotalScore>
  )
}

export default ScoreCard