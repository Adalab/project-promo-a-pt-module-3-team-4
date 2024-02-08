import GetAvatar from './GetAvatar';

function Buttons() {

  /*
  const updatePhoto = (image) => {
    updateAvatar("photo", image);
  }

  const updateImage = (image) => {
    updateAvatar("image", image);
  }
  */

  return (
    <fieldset className="addForm__group--upload">
      <GetAvatar updateAvatar={null/*updatePhoto*/} 
        for="image"
        text="Subir foto del proyecto"
        name="image" 
        id="image"
      />
      <GetAvatar updateAvatar={null/*updateImage*/}
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
