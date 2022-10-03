import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategory = createAsyncThunk('category/fetch', async () => {
  try {
    return await axios('https://api.adzuna.com/v1/api/jobs/gb/categories?app_id=29d627a9&app_key=e3d994a108934b7d72bca670554996f5',
      {
        method: 'GET',
        headers: {
          'content-type': 'application/json; charset=UTF-8',
        },
      }).then((res) => res.data);
  } catch (error) {
    return error.message;
  }
});

const categorySlice = createSlice({
  name: 'category',
  initialState: { category: [], status: 'idle' },
  reducers: {

  },
  extraReducers: (Builder) => {
    Builder
      .addCase(fetchCategory.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchCategory.fulfilled, (state, { payload }) => ({
        ...state,
        category: payload.results,
        status: 'idle',
      }))
      .addCase(fetchCategory.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }));
  },
});

export const selectAllCategory = (state) => state.categories;

export default categorySlice.reducer;
