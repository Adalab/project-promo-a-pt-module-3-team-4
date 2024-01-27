import laptopImage from "../images/laptop-code-solid.svg";
import adalabImage from "../images/adalab.png";

function Header() {
  return (
    <header className="header">
      <a
        className="header__brand"
        href="./"
        title="Haz click para volver a la página inicial"
      >
        <img
          className="header__companyLogo"
          src={laptopImage}
          alt="Logo proyectos molones"
        />
        <h1 className="header__title">Proyectos molones</h1>
      </a>
      <img className="logoSponsor" src={adalabImage} alt="Logo Adalab" />
    </header>
  );
}

export default Header;
