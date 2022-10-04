import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchJobs = createAsyncThunk('jobs/fetch', async () => {
  try {
    return await axios('https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=29d627a9&app_key=e3d994a108934b7d72bca670554996f5').then((res) => res.data);
  } catch (error) {
    return error.message;
  }
});

export const Search = createAsyncThunk('search/fetch', async (value) => {
  const { country } = value;
  try {
    return await axios(
      `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=29d627a9&app_key=e3d994a108934b7d72bca670554996f5`,
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
      .addCase(fetchJobs.pending, (state) => ({
        ...state,
        status: 'pending',
      }))
      .addCase(fetchJobs.fulfilled, (state, { payload }) => ({
        ...state,
        jobs: payload.results,
        status: 'idle',
      }))
      .addCase(fetchJobs.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }))
      .addCase(Search.pending, (state) => ({
        ...state,
        status: 'searching',
      }))
      .addCase(Search.fulfilled, (state, { payload }) => ({
        ...state,
        search: payload.results,
      }));
  },
});

export const selectAllJobs = (state) => state.jobs;

export default searchSlice.reducer;
