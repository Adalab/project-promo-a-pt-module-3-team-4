import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//import avatarImage from '../images/avatar.webp'
//import ebookImage from '../images/ebook-example.jpeg'
//import githubIcon from '../images/icons/github.svg'
//import globeIcon from '../images/icons/globe-solid.svg'

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
