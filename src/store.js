import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './redux/searchSlice';


const store = configureStore({
  reducer: {
    string: searchReducer,
  },
});

export default store;
