import { API_BASE_URL } from '../constants';

export default function concatenateApiUrl(apiRef) {
  return function setUrl(query = '', pageSize = 12) {
    return `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
      '[[at(document.type, "product")]]'
    )}${query}&lang=en-us&pageSize=${pageSize}`;
  };
}
