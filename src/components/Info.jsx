import InputText from "./InputText";
import InputUrl from "./InputUrl";

function Info({ changeData }) {
  return (
    <>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <InputText
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          changeData={changeData}
        />
        <InputText
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          changeData={changeData}
        />
        <div className="addForm__2col">
          <InputUrl
            name="repo"
            id="repo"
            placeholder="Repositorio"
            changeData={changeData}
          />
          <InputUrl
            name="demo"
            id="demo"
            placeholder="Demo"
            changeData={changeData}
          />
        </div>
        <InputText
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          changeData={changeData}
        />
        <textarea
          className="addForm__input"
          type="text"
          name="desc"
          id="desc"
          placeholder="Descripción"
          rows="5"
        ></textarea>
      </fieldset>
    </>
  );
}

export default Info;
