import React from "react";
import styled, { keyframes } from "styled-components";
import { Fade as Fader } from "react-reveal"

function Section(props) {
  return (
    <Wrap bgimage={props.image}>
        <Fader bottom>
      <ItemText>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </ItemText>
        </Fader>
      <Buttonspack>
          <Fader bottom>
        <Buttons>
          <Buttonleft>{props.leftbtntext}</Buttonleft>
          {props.rightbtntext && 
          <Buttonright>{props.rightbtntext}</Buttonright>
        }
        </Buttons>
        </Fader>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttonspack>
    </Wrap>
  );
}

export default Section;

const animateDown = keyframes`
      0% , 20% ,50% ,80% ,100% {
      transform: translateY(0);
    }
    40% {
        transform: translateY(5px);
    }
    60% {
        transform: translateY(3px);
    }
`;
const Wrap = styled.div`
z-index:10;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image:${props=>`url("images/${props.bgimage}")`}; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  font-size: 1.5rem;
`;
const Buttons = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width:768px){
      flex-direction: column;
  }
`;
const Buttonleft = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const Buttonright = styled(Buttonleft)`
  background-color: #fff;
  color: #000;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  margin: auto;
  height: 40px;
  animation-name: ${animateDown};
  display: flex;
  overflow-x: hidden;
  animation-iteration-count: infinite;
  animation-duration:2s;
`;
const Buttonspack = styled.div``;

