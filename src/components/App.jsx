import { useState } from "react";
import "../scss/App.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import localStorage from "../services/localStorage";

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
    name: "", // Nombre del proyecto
    slogan: "", // Slogan del proyecto
    technologies: "", // Tecnologías
    repo: "", // Repo
    demo: "", // Demo
    desc: "", // Descripción
    autor: "", // Nombre de la autora
    job: "", // Trabajo de la autora
    photo: "", // Foto de la autora
    image: "", // Foto del proyecto
  });

  const changeData = (nameProp, newValue) => {
    const clonData = { ...data };
    clonData[nameProp] = newValue;
    setData(clonData);
  };

  const [responseFetch, setResponseFetch] = useState("");

  const handleFetchCreate = () => {
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((dataResponse) => {
        setResponseFetch(dataResponse);
      });
  };

  const updateAvatarAuthor = (photo) => {
    const clonData = { ...data };

    clonData.photo = photo;

    setData(clonData);
  };

  const updateAvatarProject = (image) => {
    const clonData = { ...data };

    clonData.image = image;

    setData(clonData);
  };

  return (
    <div>
      <div className="container">
        <Header />
        <Main
          changeData={changeData}
          data={data}
          updateAvatarAuthor={updateAvatarAuthor}
          updateAvatarProject={updateAvatarProject}
          onSubmit={handleFetchCreate}
          responseFetch={responseFetch}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
