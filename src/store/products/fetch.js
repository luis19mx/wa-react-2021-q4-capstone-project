import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../utils/constants';
import { getAPIMetadata } from '../../utils/helpers';

const fetchProducts = createAsyncThunk(
  'products /fetchProducts',
  async (data, thunkAPI) => {
    const { signal } = thunkAPI;

    let url;

    if (data?.paginationLink) {
      url = data.paginationLink;
    } else {
      const apiRef = await getAPIMetadata();

      url = `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
        '[[at(document.type, "product")]]'
      )}&lang=en-us&pageSize=12`;
    }

    try {
      const response = await fetch(url);

      signal.addEventListener('abort', () => signal.abort());

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default fetchProducts;
