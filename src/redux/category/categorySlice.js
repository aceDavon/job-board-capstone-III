import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { appId, appkey } from '../../components/common/data';

export const fetchCategory = createAsyncThunk('category/fetch', async () => {
  try {
    return await axios(`https://api.adzuna.com/v1/api/jobs/gb/categories?app_id=${appId}&app_key=${appkey}`,
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
