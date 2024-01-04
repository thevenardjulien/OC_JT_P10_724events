/* eslint-disable no-return-assign */
import React from "react";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => {
  const handleClick = () => {
    window.location.href = "#contact";
  };

  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a href="#nos-services">Nos services</a>
        </li>
        <li>
          <a href="#nos-realisations">Nos réalisations</a>
        </li>
        <li>
          <a href="#notre-equipe">Notre équipe</a>
        </li>
      </ul>
      <Button href="#contact" onClick={handleClick}>
        Contact
      </Button>
    </nav>
  );
};

export default Menu;
