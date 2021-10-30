import { useEffect } from 'react';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = `Stylö${title ? ` | ${title}` : ''}`;
  });
}
