import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../utils/constants';

export const getAPIMetadata = async function getAPIMetadata() {
  try {
    const response = await fetch(API_BASE_URL);
    const { refs: [{ ref } = {}] = [] } = await response.json();
    return ref;
  } catch (err) {
    console.error(err);
  }
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    try {
      const apiRef = await getAPIMetadata();

      const response = await fetch(
        `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
          '[[at(document.type, "category")]]'
        )}&lang=en-us&pageSize=30`
      );

      const data = await response.json();

      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState = {
  categories: [],
  isLoading: true,
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        const categories = action.payload.results?.map(
          ({ id, data: category }) => ({ id, category })
        );
        state.categories = categories;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default categoriesSlice.reducer;
