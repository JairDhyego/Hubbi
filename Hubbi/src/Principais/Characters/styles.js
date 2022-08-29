import styled from "styled-components";
import bg from "../../assets/bg.jpg";

export const Container = styled.div`
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 95%;

    display: flex;
    align-items: center;
    justify-content: center;

    .campos {
      width: 450px;
      height: 600px;

      background-image: url(${bg});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      opacity: 0.1;
    }
  }
`;
