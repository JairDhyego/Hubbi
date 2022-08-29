import React from "react";

import { Container } from "./styles";

function Title({ texto }) {
  return (
    <Container>
      <h1>{texto}</h1>
    </Container>
  );
}

export default Title;
