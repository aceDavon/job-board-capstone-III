import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';
import searchReducer from './search/searchSlice';

const Store = configureStore({
  name: 'Jobs',
  reducer: {
    categories: categoryReducer,
    jobs: searchReducer,
  },
});

export default Store;
