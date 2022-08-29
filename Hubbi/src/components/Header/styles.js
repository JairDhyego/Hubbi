import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 95%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      font-size: 20px;
      font-weight: bold;
    }

    .menu {
      ul {
        width: 250px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          font-size: 15px;
          font-weight: bold;
        }
      }
    }
  }
`;
