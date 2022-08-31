import React from "react";

import * as C from "./styles";
import Title from "./../Title/index";

function Header() {
  return (
    <C.Container>
      <div className="content">
        <div className="logo">Logo</div>
        <div className="menu">
          <Title texto="Login" />
        </div>
      </div>
    </C.Container>
  );
}

export default Header;
