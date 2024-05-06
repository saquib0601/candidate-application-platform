// This reducer handles the state related to jobs.
// It defines an initial state with an empty array for jobs.
// It listens for the SET_JOBS action type and updates the state with the new jobs payload.
// If the action type is not recognized, it returns the current state.

import { SET_JOBS } from '../actions/actions';

const initialState = {
  jobs: [], // Initial state with an empty array for jobs
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload, // Update the jobs state with the payload from SET_JOBS action
      };
    default:
      return state; // Return current state for unrecognized action types
  }
};

export default rootReducer; // Export the root reducer
