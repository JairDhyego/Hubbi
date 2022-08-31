import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/index";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import * as C from "./styles";

function NaveDetalhes() {
  const [itemsNaves, setItemsNaves] = useState();
  const { loading, setLoading } = useContext(UserContext);

  const { id } = useParams();

  const requestCall = () => {
    setLoading(true);
    fetch(`https://swapi.dev/api/starships/${id}`)
      .then((response) => response.json())
      .then((dados) => {
        console.log(dados.results);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    requestCall();
  }, []);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <C.Container>
          <C.Conteudo>
            <h3>Nome:{itemsNaves.name}</h3>
            <span>modelo:{itemsNaves.model}</span>
            <span>Velocidade-Maxima: {itemsNaves.max_atmosphering_speed} </span>
            <span>Filme:{itemsNaves.films} </span>
            <span>
              pilotos:
              {itemsNaves.pilots
                ? itemsNaves.pilots.map((item) => <div>{item}</div>)
                : null}
            </span>
            <span>
              Carga suportada:{" "}
              {itemsNaves.cargo_capacity
                ? itemsNaves.cargo_capacity.map((item) => <div>{item}</div>)
                : null}
            </span>
          </C.Conteudo>
        </C.Container>
      )}
    </>
  );
}

export default NaveDetalhes;
