import styled from "styled-components"

export const Button = styled.button`
  width: 220px;
  height: 44px;
  background-color: black;
  color: white;
  border-radius: 5px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid transparent;
  transition: 0.3s background ease-in;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 0.2s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 2px solid black;
  &:hover {
    background-color: black;
    border: 2px solid transparent;
    color: white;
    transition: 0.2s background ease-in;
  }
`; 