import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL, getAPIMetadata } from '../../utils';

const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (controller) => {
    try {
      const apiRef = await getAPIMetadata();

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "category")]]'
        )}&lang=en-us&pageSize=30`,
        {
          signal: controller.signal,
        }
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export default fetchCategories;