import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // Optionally provide middleware, enhancers, and devTools options
});

export default store;
