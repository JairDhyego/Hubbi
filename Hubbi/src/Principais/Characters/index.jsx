import React, { useContext } from "react";
import * as C from "./styles";
import { UserContext } from "./../../contexts/index";

function Characters() {
  const { data, setData, input, setInput } = useContext(UserContext);

  /* 
  const filteredList = input.length > 0 ?  repos.filter(repo => repo.name.includes(search : []))
  */

  return (
    <C.Container>
      <div className="content">
        <div className="campos">
          <C.Lista>
            <li>Characters</li>
            <li>Weapon </li>
            <li>Aircraft</li>
          </C.Lista>

          <C.Pesquisa
            placeholder="Digite um nome"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <C.Item>
            <div>
              {data.map((item, i) => (
                <p key={i}>{item.name}</p>
              ))}
            </div>
          </C.Item>
        </div>
      </div>
    </C.Container>
  );
}

export default Characters;
