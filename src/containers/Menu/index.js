/* eslint-disable no-return-assign */
import Button from "../../components/Button";
import Logo from "../../components/Logo";

import "./style.scss";

const Menu = () => {
  const handleMenuClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView();
    }
  };

  return (
    <nav>
      <Logo />
      <ul>
        <li>
          <a
            href="#nos-services"
            onClick={() => {
              handleMenuClick("troubles");
            }}
          >
            Nos services
          </a>
        </li>
        <li>
          <a
            href="#nos-realisations"
            onClick={() => {
              handleMenuClick("nos-realisations");
            }}
          >
            Nos réalisations
          </a>
        </li>
        <li>
          <a
            href="#notre-equipe"
            onClick={() => {
              handleMenuClick("notre-equipe");
            }}
          >
            Notre équipe
          </a>
        </li>
      </ul>
      <Button
        title="contact"
        onClick={() => {
          handleMenuClick("contact");
        }}
      >
        Contact
      </Button>
    </nav>
  );
};

export default Menu;
