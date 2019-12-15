import React from "react";
import styled from "styled-components";
import {style1} from "../variant/style1";
import Drone from "../img/Drone.png";
import drone1 from "../img/drone_1.png";
import control from "../img/control.png";
import propeller from "../img/propeller.png";
const Section2 = () => {
  return (
    <Section styled={style1}>
      <div>
        <div>
          <div>
            <div>
              <img src={Drone} alt="" />
            </div>

            <h3>From air</h3>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            eaque?
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={drone1} alt="" />
            </div>
            <h3>Best drones</h3>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            eaque?
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={propeller} alt="" />
            </div>
            <h3>Speed</h3>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            eaque?
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={control} alt="" />
            </div>
            <h3>Long range</h3>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus,
            eaque?
          </div>
        </div>
      </div>
      <div>
        <button>Ask for price</button>
      </div>
    </Section>
  );
};

export default Section2;

const Section = styled.section`
  background-color: #f6f6f6;
  min-height: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  & > div:first-child {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #5e6372;
    & > div {
      flex: 0 0 250px;
      height: 270px;
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      text-align: center;
      line-height: 30px;
      margin: 2%;
      & > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        & > div {
          display: flex;
          align-items: center;
          height: 100px;
        }

        & > h3 {
          font-size: 30px;
          background: linear-gradient(
            30deg,
            ${props => props.styled.layoutColor},
            ${props => props.styled.layoutColor2}
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          padding-bottom: 10px;
        }
      }
    }
  }

  & > div:last-child {
    display: flex;
    justify-content: center;
    & > button {
      flex-basis: 205px;
      height: 50px;
      border: none;
      border-radius: 25px;
      background-color: #264699;
      color: ${props => props.styled.fontColor};
      padding: 0 0 3px 0;
    }
  }

  @media screen and (min-width: 1190px) {
    padding: initial;
  }
`;
