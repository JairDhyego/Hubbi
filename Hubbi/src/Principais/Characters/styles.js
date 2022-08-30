import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  .content {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .campos {
      width: 450px;
      height: 600px;
    }
  }
`;

export const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 15px;

  li {
    font-size: 25px;
    font-weight: bold;
    transition: all 0.3s;
    &:hover {
      color: #ffe300;
    }
  }
`;

export const Item = styled.div`
  color: #fff;
`;

export const Pesquisa = styled.input``;
