import { useState, useEffect, useContext } from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Characters from "./Principais/Characters/index";
import Title from "./components/Title/index";
import { UserContext } from "./contexts/";
import * as C from "./styles/AppStyles";

function App() {
  const { data, setData } = useContext(UserContext);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((dados) => [console.log(dados), setData(dados.results)]);
  }, []);

  return (
    <C.Container>
      <Header />
      <Title texto="Faça sua pesquisa" />
      <div className="principal">
        <Characters />
      
      </div>

      <Footer />
    </C.Container>
  );
}

export default App;
