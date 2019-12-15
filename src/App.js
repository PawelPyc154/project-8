import React from "react";
import NavBar from "./layout/NavBar";
import {createGlobalStyle} from "styled-components";
import {style1} from "./variant/style1";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle styled={style1} />
      <NavBar />
      <Home />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
*,*::before,*::after{
margin:0;
padding:0;
box-sizing:border-box;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
   
    font-size: 18px;
line-break:auto;

}
body {
  color:${props => props.styled.fontColor};
  overflow-x:hidden;
}
`;
