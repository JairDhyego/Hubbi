import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 400px;
  font-size: 12px;
  color: #fff;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 100%;
  h3 {
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
  }

  div {
    font-size: 20px;
  }
`;
