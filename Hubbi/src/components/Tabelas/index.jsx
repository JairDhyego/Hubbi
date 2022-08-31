import { useContext, useEffect, useCallback, useState } from "react";
import { Space, Table, Tag } from "antd";
import { UserContext } from "./../../contexts/index";

const Tabelas = ({ requestSelected }) => {
  const { data, setData, search } = useContext(UserContext);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(1);

  const requestCall = useCallback(() => {
    fetch(
      `https://swapi.dev/api/${requestSelected.name}/?page=${page ? page : 1}`
    )
      .then((response) => response.json())
      .then((dados) => {
        setData(dados.results);
        setTotalItems(dados.count);
      });
  }, [requestSelected, page]);

  useEffect(() => {
    requestCall();
  }, [requestSelected, page]);

  useEffect(() => {
    console.log(data);
    console.log(requestSelected.collumns);
  }, [data]);

  return (
    <div>
      <Table
        pagination={{
          total: totalItems,
          pageSize: 10,
        }}
        columns={requestSelected.columns}
        dataSource={data}
        onChange={(pagination) => {
          setPage(pagination.current);
        }}
      />
    </div>
  );
};

export default Tabelas;
