import styled from "styled-components";

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 28px;
  max-width: 760px;
  height: 168px;
  background-color: #fbf1f1;
  margin: 64px auto;
  h1 {
    font-size: 24px;
    font-weight: 700;
  }
  li {
    font-size: 16px;
    font-weight: 500;
  }
`;

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play dice game</h1>
      <div>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After click on dice if selected number is equal to dice number you
            will get same point as dice
          </li>
          <li>If you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
    </RulesContainer>
  );
};

export default Rules;
