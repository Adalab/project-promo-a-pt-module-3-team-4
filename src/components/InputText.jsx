import PropTypes from "prop-types";

function InputText(props) {
  return (
    <input
      className="addForm__input"
      type="text"
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default InputText;
