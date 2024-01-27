import PropTypes from "prop-types";

function InputUrl(props) {
  return (
    <input
      className="addForm__input"
      type="url"
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}

InputUrl.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default InputUrl;
