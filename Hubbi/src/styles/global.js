import bg from "../assets/bg.jpg";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
}


body{
    max-width: 1120px;
    width: 100%;

    height: 100vh;
    font-family: "Segoe UI", sans-serif;
    background-color: #272b30;
    color: #eee;

      background-image: url(${bg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;


     
}
`;

export default GlobalStyle;
