import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';

// Combine all reducers using combineReducers
const rootReducer = combineReducers({
  jobs: jobsReducer,
  // Add more reducers here if needed
});

export default rootReducer;
