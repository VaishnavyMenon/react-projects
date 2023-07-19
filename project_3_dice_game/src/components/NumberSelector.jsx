/* eslint-disable react/prop-types */
import styled from "styled-components";

const Button = styled.button`
  height: 72px;
  width: 72px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: 1px solid black;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
`;
const NumberBox = styled.div`
  display: flex;
  gap: 24px;
`;

const Selector = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;

  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 24px;
  font-weight: 400;
`;

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];

const numberSelectHandler = (value) => {
  setSelectedNumber(value);
  setError("")
}
  return (
    <Selector>
      <Error>{error}</Error>
      <NumberBox>
        {arrNumbers.map((value, i) => (
          <Button
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => numberSelectHandler(value)}
          >
            {value}
          </Button>
        ))}
      </NumberBox>
      <p>Select Number</p>
    </Selector>
  );
};

export default NumberSelector;
