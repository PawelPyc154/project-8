import React from "react";
import styled from "styled-components";
import {style1} from "../variant/style1";
import Layer_5_eb_pattern from "../img/Layer_5_eb_pattern.png";
const Section5 = () => {
  return (
    <Section styled={style1}>
      {/* <div>
        <img src={Layer_5_eb_pattern} alt="" />
        <div></div>
      </div> */}
      <div>
        <h3>Sign up for our newsletter</h3>
        <div>
          <input type="text" placeholder="Email address" />
          <button>Send</button>
        </div>
      </div>
    </Section>
  );
};

export default Section5;

const Section = styled.section`
  height: 489px;
  width: 100%;
  background: url(${Layer_5_eb_pattern}) center/auto 100% no-repeat;

  & > div {
    height: 489px;
    width: 100%;
    background: linear-gradient(
      45deg,
      rgba(203, 0, 54, 0.8) 25%,
      rgba(224, 104, 0, 0.8) 75%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > h3 {
      font-size: 30px;
    }
    & > div {
      margin: 40px 0 0 0;
      display: flex;
      & > input {
        background-color: rgba(255, 255, 255, 0.1);
        flex-basis: 400px;
        height: 40px;
        border-radius: 20px;
        padding-right: 50px;
        border: none;
        padding: 0 10px;
        color: white;
        &::placeholder {
          color: white;
        }
      }

      & > button {
        display: block;
        width: 150px;
        /* max-width: 150px; */
        margin-left: -50px;
        height: 40px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 1);
        border: none;
      }
    }
  }
`;
