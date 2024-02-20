import laptopImage from "../images/laptop-code-solid.svg";

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
      {/*
      <div className="comparte">
        <span className="header__title">Comparte tu proyecto</span>
        <img className="logoSponsor" src={adalabImage} alt="Logo Adalab" />
      </div>
      */}
    </header>
  );
}

export default Header;
