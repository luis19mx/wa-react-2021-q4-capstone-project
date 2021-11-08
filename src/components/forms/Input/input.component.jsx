import PropTypes from 'prop-types';
import { Label } from 'components/styles/label.styles';
import { InputStyles } from './input.styles';

function Input({ handleChange, value, type, name, label, required = false }) {
  return (
    <InputStyles>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        value={value}
        required={required}
      />
      <Label shrink={value.length}>{label}</Label>
    </InputStyles>
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
