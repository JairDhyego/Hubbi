import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
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
  }
`;
