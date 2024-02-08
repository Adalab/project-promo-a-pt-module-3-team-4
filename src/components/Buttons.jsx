import GetAvatar from './GetAvatar';

function Buttons({ updateAvatarProject, updateAvatarAuthor }) {

  return (
    <fieldset className="addForm__group--upload">
      <GetAvatar updateAvatar={updateAvatarProject} 
        for="image"
        text="Subir foto del proyecto"
        name="image" 
        id="image"
      />
      <GetAvatar updateAvatar={updateAvatarAuthor}
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
