import { API_BASE_URL } from '../constants';

export default async function getAPIMetadata() {
  try {
    const response = await fetch(API_BASE_URL);
    const { refs: [{ ref } = {}] = [] } = await response.json();
    return ref;
  } catch (err) {
    console.error(err);
  }
}
