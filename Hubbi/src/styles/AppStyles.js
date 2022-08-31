import styled from "styled-components";
import bg from "../assets/bg.jpg";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;

  .conteudo--Principal {
    height: calc(100vh - 155px);
  }

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
