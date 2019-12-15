import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {style1} from "../variant/style1";
import HamburgerMenu from "./HamburgerMenu";
import {motion} from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    closeNavBar();
  }, []);

  const closeNavBar = () => {
    window.screen.width < 1000 && setIsOpen(false);
  };
  return (
    <Style styled={style1}>
      <motion.header animate={isOpen ? "open" : "closed"}>
        <h2>DroneZone</h2>
        <motion.nav
          variants={
            window.screen.width < 1000
              ? {
                  closed: {x: "-100%"},
                  open: {x: 0, transition: {duration: 0.4}}
                }
              : null
          }
        >
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Our drones</a>
            </li>
            <li>
              <a href="#">Our realizations</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </motion.nav>

        <HamburgerMenu toggle={() => setIsOpen(!isOpen)} />
      </motion.header>
    </Style>
  );
};

export default NavBar;

const Style = styled.div`
  z-index: 1500;
  position: absolute;
  width: 100%;

  & > header {
    margin: 0 auto;
    height: 100px;
    width: 100%;
    max-width: 1350px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > h2 {
      font-size: 36px;
      padding: 0 50px 0 0;
    }
    & > nav {
      position: fixed;
      background: linear-gradient(
        to right,
        ${props => props.styled.layoutColor},
        ${props => props.styled.layoutColor2}
      );
      transform: translateX(-100%);
      top: 0;
      left: 0;
      width: 80%;
      z-index: 1000;
      & > ul {
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        & > li {
          & > a {
            font-size: 30px;
            text-decoration: none;
          }
        }
      }
    }

    @media screen and (min-width: 1000px) {
      justify-content: space-between;
      & > nav {
        position: initial;
        background: initial;
        transform: initial;
        top: initial;
        left: initial;
        width: initial;
        z-index: initial;
        & > ul {
          height: initial;
          width: initial;
          display: flex;
          flex-direction: initial;
          justify-content: initial;
          align-items: initial;

          & > li {
            & > a {
              font-size: initial;

              display: block;
              padding: 0 5px 3px 30px;

              height: 40px;
              display: flex;
              align-items: center;
              color: ${props => props.styled.fontColor};
            }
            &:last-child {
              & a {
                border: 1px solid ${props => props.styled.fontColor};
                border-radius: 19px;
              }
            }
          }
        }
      }
    }
  }
`;
