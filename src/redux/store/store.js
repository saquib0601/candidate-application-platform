// This file configures the Redux store using the configureStore function from Redux Toolkit.
// It combines the root reducer.
// The configured store is then exported for use in the application.

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
