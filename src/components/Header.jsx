import React from "react";
import react, { useState } from "react";
import Hamburger from "hamburger-react";
import "./header.scss";

const Header = () => {
  const [burger, setBurger] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className=" headerInner">
            
            <div className="header_logo">
              <img src="./images/Logo.png" alt="SoftDataLogo" />
            </div>

            <div className="header_burger">
              <span style={{ color: "white" }}>
                <Hamburger toggled={burger} toggle={setBurger} />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
