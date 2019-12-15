import React from "react";
import styled from "styled-components";
import {style1} from "../variant/style1";
import Drone from "../img/Drone@2x.png";
const Section3 = () => {
  return (
    <Section styled={style1}>
      <div>
        <div>
          <h2>Nature from the air</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            nisi consequatur nulla sit, vero libero facilis, necessitatibus
            repellat sed autem fugit. Non, ullam molestias.
          </p>
        </div>
        <div>
          <div>
            <div>
              <div>1</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              ad.
            </div>
          </div>
          <div>
            <div>
              <div>2</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              labore? Laboriosam, amet incidunt! ad.
            </div>
          </div>
          <div>
            <div>
              <div>3</div>
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              saepe labore quae temporibus voluptatum, beatae ullam odit dolor.
            </div>
          </div>
          <div>
            <div>
              <div>4</div>
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
              ad.
            </div>
          </div>
          <div>
            <div>
              <div>5</div>
            </div>
            <div>
              Possimus saepe labore quae temporibus voluptatum, beatae ullam
              odit dolor, iusto laboriosam debitis fugit blanditiis.
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </Section>
  );
};

export default Section3;

const Section = styled.section`
  display: flex;
  justify-content: center;
  min-height: 500px;
  flex-wrap: wrap;
  color: #5e6372;
  & > div {
    flex: 0 1 812px;
  }
  & > div:first-child {
    & > div:first-child {
      padding:5px;
      display:flex;
 
     align-items:center;
      flex-direction:column;
      & > h2 {
       
        font-size: 48px;
        background: linear-gradient(
          30deg,
          ${props => props.styled.layoutColor},
          ${props => props.styled.layoutColor2}
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      & > p {
        color: #5e6372;
        line-height: 36px;
        margin: 0 0 40px 0;
      }
    }
    & > div:last-child {
      padding:5px;
      margin: 30px 0;

      display: grid;
      grid-gap: 10px;
      /* grid-auto-flow: column; */

      grid-template-columns: repeat(1, minmax(50, 400px));
      grid-auto-rows: 120px;
      & > div {
        /* background-color: green; */
        display: flex;
        justify-content: space-between;

        & > div:first-child {
          flex: 0 0 70px;

          & > div {
            width: 50px;
            height: 50px;
            border: 1px solid #5e6372;
            border-radius: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        & > div:last-child {
          flex: 1 1 270px;
        }

        & > div:last-child {
        }
      }
    }
  }
  & > div:last-child {
    /* background: url(${Drone}) center / 100% auto no-repeat; */
    display: none;
    /* flex-basis: 1fr; */
  }

  @media screen and (min-width: 800px) {
    & > div {
    }
    & > div:first-child {

      & > div:last-child {
        margin: 30px 0;

        display: grid;
        grid-gap: 10px;
        grid-auto-flow: column;

        grid-template-columns: repeat(2, minmax(50, 400px));
        grid-template-rows: repeat(3, 120px);
      }
    }

  }

  @media screen and (min-width: 1625px) {
    justify-content: flex-end;
    & > div:first-child {
      & > div:first-child {
        padding:5px;
        display:initial;
       align-items:initial;
        flex-direction:initial;
    } 
  }
    & > div:last-child {
      background: url(${Drone}) center / 100% auto no-repeat;
     display: block;
    }

    
  }
`;
