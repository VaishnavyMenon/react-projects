import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "../styled/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;
`;
const Image = styled.img`
  height: 522px;
  width: 640px;
`;
const Title = styled.h1`
  font-size: 96px;
  font-weight: 700;
  white-space: nowrap;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <Image src="\images\dices.png" alt="" />
      </div>
      <Body>
        <Title>DICE GAME</Title>
        <Button onClick={toggle}>Play Now</Button>
      </Body>
    </Container>
  );
};

StartGame.propTypes = {
  toggle: PropTypes.func,
};

export default StartGame;
