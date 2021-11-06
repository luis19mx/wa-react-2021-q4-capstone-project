import { TextareaStyles, Label } from './textarea.styles';

export default function Textarea({ handleChange, label, ...textareaProps }) {
  return (
    <TextareaStyles>
      <Label shrink={textareaProps.value.length}>{label}</Label>
      <textarea onChange={handleChange} {...textareaProps}></textarea>
    </TextareaStyles>
  );
}
