import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


body{
    width: 100vw;
    height: 100vh;
    font-family: "Segoe UI", sans-serif;
    background-color: #272b30;
    color: #eee;
}
`;

export default GlobalStyle;
