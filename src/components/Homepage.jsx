import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page-container">
      <Link to="/main">
        <button className="main-button">Ir a Main</button>
      </Link>
    </div>
  );
}

export default HomePage;
