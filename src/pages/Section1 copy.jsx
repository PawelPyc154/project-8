import React from "react";
import styled from "styled-components";
import {style1} from "../variant/style1";
import Layer4 from "../img/Layer_4.png";
const Section1 = () => {
  return (
    <Section styled={style1}>
      <div>
        <div>
          <h1>Film your event eith us!</h1>
          <p>
            Pellentesque eget nunc sit amet urna ullamcorper fermentum et eu
            leo. Nunc vel nibh tempor, pharetra lectus congue, luctus orci.
          </p>
          <div>
            <bottom>Ask for price</bottom>
            <bottom>Watch video</bottom>
          </div>
        </div>
      </div>

      <div></div>
    </Section>
  );
};

export default Section1;

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    45deg,
    ${props => props.styled.layoutColor} 25%,
    ${props => props.styled.layoutColor2} 75%
  );
  & > div:first-child {
    z-index: 500;
    display: grid;
    grid-template-columns: minmax(50px, 600px);
    grid-template-rows: repeat(1, 1fr);
    & > div {
      /* grid-row: 1/3; */
      text-align: center;
      & > h1 {
        font-size: 48px;
        margin-bottom: 40px;
      }

      & > div {
        display: grid;
        grid-template-columns: repeat(1, minmax(10px, 200px));

        grid-gap: 30px;
        justify-content: center;
        margin: 60px 0 0 0;

        & > bottom {
          display: block;
          flex: 0 1 200px;
          border: 1px solid ${props => props.styled.fontColor};
          border-radius: 25px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: 5px;
          background-color: ${props => props.styled.fontColor};
          color: ${props => props.styled.layoutColor2};
        }
      }
    }
  }
  & > div:last-child {
    bottom: 0px;
    position: absolute;
    background: url(${Layer4}) center no-repeat;
    background-size: auto 60vh;
    height: 60vh;
    width: 100%;
  }

  @media screen and (min-width: 1000px) {
    & > div:first-child {
      grid-template-rows: repeat(2, 1fr);
      & > div {
        text-align: center;
        & > h1 {
          margin-bottom: 20px;
        }
        & > div {
          grid-template-columns: repeat(2, minmax(10px, 200px));
          grid-gap: 20px;
          margin: 40px 0 60px 0;
          & > bottom {
            background-color: initial;
            color: ${props => props.styled.fontColor};
          }
          & > bottom:first-child {
            background-color: ${props => props.styled.fontColor};
            color: ${props => props.styled.layoutColor2};
          }
        }
      }
    }
    & > div:last-child {
      background-size: initial;

      height: 738px;
    }
  }
`;
