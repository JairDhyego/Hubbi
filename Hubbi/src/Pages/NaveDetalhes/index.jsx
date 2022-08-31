import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/index";
import { Link, useParams } from "react-router-dom";
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
        setItemsNaves(dados);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    requestCall();
  }, [id]);

  return (
    <>
      {loading ? (
        <Spin />
      ) : (
        <C.Container>
          <C.Conteudo>
            <h3>{itemsNaves?.name}</h3>
            <div>
              Modelo: <span> {itemsNaves?.model} </span>
            </div>
            <div>
              Velocidade-Maxima:
              <span> {itemsNaves?.max_atmosphering_speed} </span>
            </div>
            <div>
              Filme em que aparece:
              <span>
                <Link to={"itemsNaves?.films"} target="_blank">
                  Filme
                </Link>
              </span>
            </div>
            <div>
              Pilotos:
              {itemsNaves?.pilots ? (
                itemsNaves?.pilots.map((item) => <div>{item}</div>)
              ) : (
                <span>Não tem.</span>
              )}
            </div>
            <div>
              Carga suportada: <span>{itemsNaves?.cargo_capacity}</span>
            </div>
            <div>
              Fabricante: <span>{itemsNaves?.manufacturer}</span>
            </div>
            <div>
              Tempo utilizável: <span>{itemsNaves?.consumables}</span>
            </div>
          </C.Conteudo>
        </C.Container>
      )}
    </>
  );
}

export default NaveDetalhes;
