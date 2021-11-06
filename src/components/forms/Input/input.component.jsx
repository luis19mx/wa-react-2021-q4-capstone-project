import { InputStyles, Label } from './input.styles';

export default function Input({ handleChange, label, ...inputProps }) {
  return (
    <InputStyles>
      <input onChange={handleChange} {...inputProps} />
      {label ? <Label shrink={inputProps.value.length}>{label}</Label> : null}
    </InputStyles>
  );
}
