import { useEffect, useContext } from "react";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import Characters from "./Principais/Characters/index";

import { UserContext } from "./contexts/";
import * as C from "./styles/AppStyles";

function App() {
  return (
    <C.Container>
      <Header />

      <div className="principal">
        <Characters />
      </div>
      <div className="teste"></div>

      <Footer />
    </C.Container>
  );
}

export default App;
