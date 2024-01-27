import InputFile from './InputFile'

function Buttons() {
  return (
    <fieldset className="addForm__group--upload">
      <InputFile
        for="image"
        text="Subir foto del proyecto"
        name="image" 
        id="image"
      />
      <InputFile
        for="photo"
        text="Subir foto de la autora"
        name="photo" 
        id="photo"
      />
      <button className="button--large">Guardar proyecto</button>
    </fieldset>
  );
}

export default Buttons;
