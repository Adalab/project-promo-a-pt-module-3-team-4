import InputText from './InputText'

function Author() {
  return (
    <fieldset className="addForm__group">
      <legend className="addForm__title">Cuéntanos sobre la autora</legend>
      <InputText
        name="autor"
        id="autor"
        placeholder="Nombre"
        />
      <InputText
        name="job"
        id="job"
        placeholder="Trabajo"
        />
    </fieldset>
  );
}

export default Author;
