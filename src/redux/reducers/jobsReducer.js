import { SET_JOBS } from '../actions/actions';

const initialState = {
  jobs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
