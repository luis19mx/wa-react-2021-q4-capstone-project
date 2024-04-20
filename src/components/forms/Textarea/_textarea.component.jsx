import PropTypes from 'prop-types';
import { TextareaStyles } from './_textarea.styles';
import { Label, InputContainerStyles } from '../styles';

function Textarea({ handleChange, value, name, label, required = false }) {
  return (
    <InputContainerStyles>
      <TextareaStyles
        onChange={handleChange}
        name={name}
        value={value}
        required={required}
      />
      <Label shrink={value.length}>{label}</Label>
    </InputContainerStyles>
  );
}

Textarea.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Textarea;
