import InputText from "./InputText";
import InputUrl from "./InputUrl";

function Info() {
  return (
    <>
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <InputText name="name" id="name" placeholder="Nombre del proyecto" />
        <InputText name="slogan" id="slogan" placeholder="Slogan" />
        <div className="addForm__2col">
          <InputUrl name="repo" id="repo" placeholder="Repositorio" />
          <InputUrl name="demo" id="demo" placeholder="Demo" />
        </div>
        <InputText
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
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
