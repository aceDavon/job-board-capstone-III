import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './category/categorySlice';

const Store = configureStore({
  name: 'Jobs',
  reducer: {
    categories: categoryReducer,
  },
});

export default Store;
