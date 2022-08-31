import * as C from "./styles";
import { Link } from "react-router-dom";

function Header() {
  return (
    <C.Container>
      <div className="content">
        <Link to="/" className="logo">
          Logo
        </Link>
        <C.Menu>
          <Link to="/people">People</Link>
          <Link to="/naves">Naves/Armas</Link>
        </C.Menu>
      </div>
    </C.Container>
  );
}

export default Header;
