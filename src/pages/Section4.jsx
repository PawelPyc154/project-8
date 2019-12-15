import React from "react";
import styled from "styled-components";
import Layer_2 from "../img/Layer_2.png";
import Layer_3 from "../img/Layer_3.png";
import {style1} from "../variant/style1";

const Section4 = () => {
  return (
    <Section styled={style1}>
      <div>
        <img src={Layer_2} alt="" />
      </div>
      <div>
        <h2>Nature from the air</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          tempore, nisi ut maiores rerum commodi. Animi ipsa earum quis
          doloribus! Molestiae assumenda dicta numquam odio eum eius qui ab
          doloremque.
        </p>
        <button>Ask for price</button>
      </div>

      <div>
        <img src={Layer_3} alt="" />
      </div>
      <div>
        <h2>City from the air</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          tempore, nisi ut maiores rerum commodi. Animi ipsa earum quis
          doloribus! Molestiae assumenda dicta numquam odio eum eius qui ab.
        </p>
        <button>Ask for price</button>
      </div>
    </Section>
  );
};

export default Section4;

const Section = styled.section`
  /* height: 200vh; */
  display: grid;
  grid-template-columns: 1fr;

  & > div {
    & > img {
      width: 100%;
      padding: 0 0 -5px 0;
      display: block;
    }
  }
  & > div:nth-child(2),
  div:nth-child(4) {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h2 {
      background: linear-gradient(
        30deg,
        ${props => props.styled.layoutColor},
        ${props => props.styled.layoutColor2}
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      font-size: 32px;
      margin: 0 0 10px 0;
    }
    & > p {
      color: #5e6372;
      line-height: 34px;
      margin: 0 0 40px 0;
      max-width: 600px;
    }
    & > button {
      width: 100%;
      max-width: 205px;
      height: 50px;
      border: none;
      border-radius: 25px;
      background-color: #264699;
      color: ${props => props.styled.fontColor};
      padding: 0 0 3px 0;
    }
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  & > div:nth-child(1) {
    order: 1;
  }
  & > div:nth-child(2) {
    order: 2;
    align-items: flex-start;
    justify-content: center;
  }
  & > div:nth-child(3) {
    order: 4;
  }
  & > div:nth-child(4) {
    order: 3;
    align-items: flex-start;
    justify-content: center;
  }

  @media screen and (min-width: 1000px) {
    & > div:nth-child(2) {
      justify-content: center;
      padding: 0 0 0 5%;
    }
    & > div:nth-child(4) {
      justify-content: center;
      padding: 0 5% 0 25%;
    }
  }
`;
