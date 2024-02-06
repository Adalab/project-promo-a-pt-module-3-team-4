import useState from "react";
import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

//import avatarImage from '../images/avatar.webp'
//import ebookImage from '../images/ebook-example.jpeg'
//import githubIcon from '../images/icons/github.svg'
//import globeIcon from '../images/icons/globe-solid.svg'
// // - App
//       - Header
//     -Main
//         - Hero
//       - Preview
//         - Card
//       - Info
//         - InputText
//         - InputText
//         - InputUrl
//         - InputText
//       - Author
//         - InputText
//         - InputText
//       -Buttons
//         - InputFile
//         - InputFile
//     - Footer

function App() {
  const [data, setData] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    author: "",
    job: "",
    photo: "",
    image: "",
  });

  const changeData = () => {
    const cloneData = { ...data };
  };

  return (
    <div>
      <div className="container">
        <Header />
        <Main changeData={changeData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
