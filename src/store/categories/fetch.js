import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'utils/constants';
import { getAPIMetadata } from 'utils/helpers';

const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkAPI) => {
    const { signal, getState } = thunkAPI;
    const state = getState();
    signal.addEventListener('abort', () => signal.abort());

    try {
      const apiRef = state.apiMetaData.ref
        ? state.apiMetaData.ref
        : await getAPIMetadata();

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "category")]]'
        )}&lang=en-us&pageSize=30`,
        {
          signal,
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
