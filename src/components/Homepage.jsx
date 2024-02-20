import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import Card from "./Card";

function HomePage( {data} ) {
  return (
    <div className="home-page-container homepage">
      <h1 className="homepage__title">Proyectos molones</h1> 
      <p className="homepage__description">Escaparate en línea para recoger ideas a través de la tecnología.</p> 
      <Link to="/main">
        <button className="homepage__button button--link">Nuevo proyecto</button>
      </Link>
      <ul className="homepage__projects">
        <li className="homepage__project"><Card data={data} /></li>
        <li className="homepage__project"><Card data={data} /></li>
        <li className="homepage__project"><Card data={data} /></li>
        <li className="homepage__project"><Card data={data} /></li>
      </ul>
    </div>
  );
}

HomePage.propTypes = {
  data: PropTypes.array.isRequired,
};

export default HomePage;
