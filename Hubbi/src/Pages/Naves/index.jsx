import { useCallback, useContext, useEffect } from "react";
import { UserContext } from "./../../contexts/index";
import { Pagination, Spin } from "antd";
import { useParams } from "react-router-dom";
import * as C from "../styles";

function Naves() {
  const {
    data,
    setData,
    totalItems,
    setTotalItems,
    requestSelected,
    page,
    setPage,
    loading,
    setLoading,
  } = useContext(UserContext);

  const { id } = useParams();

  const requestCall = useCallback(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/starships/?page=${page ? page : 1}`)
      .then((response) => response.json())
      .then((dados) => {
        setData(dados.results);
        setTotalItems(dados.count);
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  }, [page]);

  useEffect(() => {
    requestCall();
  }, [requestSelected, page]);

  const setarParams = () => {};

  return (
    <C.Container>
      {loading ? (
        <Spin />
      ) : (
        <>
          <C.Map>
            {data.map((item) => {
              return (
                <C.Itemprincipal key={item.name}>
                  <h3> {item.name}</h3>
                  <div>
                    <span> Modelo: {item.model}</span>
                    <span> Valor:{item.cost_in_credits}</span>
                  </div>
                </C.Itemprincipal>
              );
            })}
          </C.Map>
          <Pagination
            className="pagination"
            defaultCurrent={1}
            total={totalItems}
            onChange={(page) => {
              setPage(page);
            }}
            loading={loading}
          />
        </>
      )}
    </C.Container>
  );
}

export default Naves;
