import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../utils/constants';
import { getAPIMetadata } from '../../utils/helpers';

const fetchProducts = createAsyncThunk(
  'products /fetchProducts',
  async (controller, type, params) => {
    try {
      const apiRef = await getAPIMetadata();
      let response;

      if (type === 'pagination') {
        response = params;
      } else {
        response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.type, "product")]]'
          )}&lang=en-us&pageSize=12`,
          {
            signal: controller.signal,
          }
        );
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default fetchProducts;
