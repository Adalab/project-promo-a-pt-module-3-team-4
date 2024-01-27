import PropTypes from "prop-types";

function InputFile(props) {
  return (
    <>
      <label htmlFor={props.for} className="button">
        {props.text}
      </label>
      <input
        className="addForm__hidden"
        type="file"
        name={props.name}
        id={props.id}
      />
    </>
  );
}

InputFile.propTypes = {
  for: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default InputFile;
