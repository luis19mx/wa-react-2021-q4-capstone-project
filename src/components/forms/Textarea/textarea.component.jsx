import PropTypes from 'prop-types';
import { Label } from 'components/styles/label.styles';
import { TextareaStyles } from './textarea.styles';

function Textarea({ handleChange, value, name, label, required = false }) {
  return (
    <TextareaStyles>
      <textarea
        onChange={handleChange}
        name={name}
        value={value}
        required={required}
      ></textarea>
      <Label shrink={value.length}>{label}</Label>
    </TextareaStyles>
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
