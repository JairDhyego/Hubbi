import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Options = styled.ul`
  width: 700px;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  li {
    font-size: 20px;
    font-weight: bold;
    transition: all 0.3s;
    &:hover {
      color: #ffe300;
    }
  }
`;
