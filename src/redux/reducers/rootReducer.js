// This file combines all reducers using the combineReducers function from Redux.
// It imports individual reducers and combines them into a single root reducer.

import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';

// Combine all reducers using combineReducers
const rootReducer = combineReducers({
  jobs: jobsReducer,
  // Add more reducers here if needed
});

export default rootReducer; // Export the root reducer
