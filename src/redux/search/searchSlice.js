import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { appId, appkey } from '../../components/common/data';

export const Search = createAsyncThunk('jobs/fetch', async (value) => {
  const { country } = value;
  try {
    return await axios(
      `https://api.adzuna.com/v1/api/jobs/${country}/search/1?app_id=29d627a9&app_key=e3d994a108934b7d72bca670554996f5`,
    ).then((res) => res.data);
  } catch (error) {
    return error;
  }
});

export const SearchJobs = createAsyncThunk('search/fetch', async (value) => {
  try {
    return await axios(
      `https://api.adzuna.com/v1/api/jobs/${value}/search/1?app_id=${appId}&app_key=${appkey}`,
    ).then((res) => res.data);
  } catch (error) {
    return error;
  }
});

const searchSlice = createSlice({
  name: 'search',
  initialState: { jobs: [], search: [], status: 'idle' },
  reducers: {
    filterJobs: (state, { payload }) => ({
      ...state,
      search: payload,
      status: 'searched',
    }),
    clearStatus: (state) => ({
      ...state,
      status: 'idle',
    }),
  },
  extraReducers: (Builder) => {
    Builder.addCase(Search.pending, (state) => ({
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
        jobs: state.jobs.concat(...payload.results),
        status: 'idle',
      }));
  },
});

export const { filterJobs, clearStatus } = searchSlice.actions;

export const selectAllJobs = (state) => state.jobs;

export default searchSlice.reducer;
