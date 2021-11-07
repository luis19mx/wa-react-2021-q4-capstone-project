import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from 'utils/constants';

const fetchMetaData = createAsyncThunk(
  'apiMetaData/fetchMetaData',
  async (_, thunkAPI) => {
    const { signal } = thunkAPI;
    signal.addEventListener('abort', () => signal.abort());

    try {
      const response = await fetch(API_BASE_URL, { signal });
      const { refs: [{ ref } = {}] = [] } = await response.json();
      return ref;
    } catch (err) {
      console.error(err);
    }
  }
);

export default fetchMetaData;
