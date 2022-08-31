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
   
    width: 100%;

    height: 100vh;
    font-family: "Segoe UI", sans-serif;
    background-color: #272b30;
    

     
}



`;

export default GlobalStyle;
