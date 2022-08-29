import { useState, useEffect } from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Characters from "./Principais/Characters/index";
import Armas from "./Principais/Armas/index";
import Naves from "./Principais/Naves/index";
import Title from "./components/Title/index";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/")
      .then((response) => response.json())
      .then((dados) => [console.log(dados), setData(dados)]);
  }, []);

  return (
    <div className="App">
      <Header />
      <Title texto="Faça sua pesquisa" />
      <div>
        <Characters data={data} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
