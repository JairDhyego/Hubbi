import React from "react";

import * as C from "./styles";

function Header() {
  return (
    <C.Container>
      <div className="content">
        <div className="logo">Logo</div>
        <div className="menu">
          <ul>
            <li>Characters</li>
            <li>Weapon </li>
            <li>Aircraft</li>
          </ul>
        </div>
      </div>
    </C.Container>
  );
}

export default Header;
