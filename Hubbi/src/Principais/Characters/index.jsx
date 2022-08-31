import React, { useContext, useEffect, useState } from "react";
import * as C from "./styles";
import Tabelas from "./../../components/Tabelas/index";
import { nave, personagem } from "./uteis";

function Characters() {
  const [requestSelected, setRequestSelected] = useState({
    name: "people",
    collumns: personagem,
  });

  return (
    <C.Container>
      <C.Options>
        <li
          onClick={() =>
            setRequestSelected({
              name: "people",
              collumns: personagem,
            })
          }
        >
          Personagens
        </li>
        <li
          onClick={() =>
            setRequestSelected({
              name: "starships ",
              collumns: nave,
            })
          }
        >
          Naves
        </li>
      </C.Options>
      <Tabelas requestSelected={requestSelected} />
    </C.Container>
  );
}

export default Characters;
