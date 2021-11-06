import { FormInputStyles, Label } from './form-input.styles';

export default function FormInput({ handleChange, label, ...inputProps }) {
  return (
    <FormInputStyles>
      <input onChange={handleChange} {...inputProps} />
      {label ? <Label shrink={inputProps.value.length}>{label}</Label> : null}
    </FormInputStyles>
  );
}
