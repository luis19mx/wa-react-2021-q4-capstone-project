import PropTypes from 'prop-types';
import { InputStyles } from './Input.styles';
import { Label, InputContainerStyles } from '../styles';

function Input({ handleChange, value, type, name, label, required = false }) {
  return (
    <InputContainerStyles>
      <InputStyles
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        required={required}
      />
      <Label shrink={value.length}>{label}</Label>
    </InputContainerStyles>
  );
}

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Input;
