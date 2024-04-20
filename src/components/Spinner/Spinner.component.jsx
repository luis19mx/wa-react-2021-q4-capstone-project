import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles';

export default function Spinner() {
  return (
    <SpinnerOverlay data-testid="spinner">
      <SpinnerContainer />
    </SpinnerOverlay>
  );
}
