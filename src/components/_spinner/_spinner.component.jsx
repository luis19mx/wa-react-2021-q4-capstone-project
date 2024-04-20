import { SpinnerContainer, SpinnerOverlay } from './_spinner.styles';

export default function Spinner() {
  return (
    <SpinnerOverlay data-testid="spinner">
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}
