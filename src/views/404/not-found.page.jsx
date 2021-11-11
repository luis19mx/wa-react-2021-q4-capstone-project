import { ReactComponent as SvgIllustration } from 'assets/404.svg';
import { NotFoundStyles } from './not-found.styles';

export default function NotFoundPage() {
  return (
    <NotFoundStyles>
      <SvgIllustration />
    </NotFoundStyles>
  );
}
