import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 10px;
  position: relative;
  height: 100%;

  .pagination {
    position: absolute;
    bottom: -20px;
    right: 0;
  }
`;

export const Map = styled.div`
  width: 100%;
  height: 90%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-bottom: 10px;

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Itemprincipal = styled.div`
  border: 1px solid #ffe300;
  background-color: #000200;
  opacity: 0.8;
  border-radius: 5px;

  &:hover {
    transform: scale(1.04);
  }

  h3 {
    font-weight: bold;
    color: #fff;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 10px;
    cursor: pointer;
    &:hover {
      color: #ffe300;
    }
  }

  div {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
