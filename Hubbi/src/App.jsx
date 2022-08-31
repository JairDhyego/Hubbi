import * as C from "./styles/AppStyles";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

import AppPAges from "./Pages/AppPages";

function App() {
  return (
    <C.Container>
      <Header />
      <div className="conteudo--Principal">
        <AppPAges />
      </div>
      <Footer />
    </C.Container>
  );
}

export default App;
