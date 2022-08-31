import { Routes, Route } from "react-router-dom";
import People from "./People/";
import Naves from "./Naves/";
import NaveDetalhes from "../Pages/NaveDetalhes";

function Pages() {
  return (
    <Routes>
      <Route path="/people" element={<People />} />
      <Route path="/naves" element={<Naves />} />
      <Route path="/naves/:id" element={<NaveDetalhes />} />
    </Routes>
  );
}

export default Pages;
