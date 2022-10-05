import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const Search = createAsyncThunk('jobs/fetch', async (value) => {
  const { country } = value;
  try {
    return await axios(`https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=29d627a9&app_key=e3d994a108934b7d72bca670554996f5`).then((res) => res.data);
  } catch (error) {
    return error;
  }
});

export const SearchJobs = createAsyncThunk('search/fetch', async (value) => {
  const { country, page } = value;
  try {
    return await axios(
      `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=29d627a9&app_key=e3d994a108934b7d72bca670554996f5`,
    ).then((res) => res.data);
  } catch (error) {
    return error;
  }
});

const searchSlice = createSlice({
  name: 'search',
  initialState: { jobs: [], search: [], status: 'idle' },
  reducers: {

  },
  extraReducers: (Builder) => {
    Builder
      .addCase(Search.pending, (state) => ({
        ...state,
        status: 'searching',
      }))
      .addCase(Search.fulfilled, (state, { payload }) => ({
        ...state,
        jobs: payload.results,
        status: 'idle',
      }))
      .addCase(SearchJobs.pending, (state) => ({
        ...state,
        status: 'searching',
      }))
      .addCase(SearchJobs.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'idle',
        search: payload.results,
      }));
  },
});

export const selectAllJobs = (state) => state.jobs;

export default searchSlice.reducer;
