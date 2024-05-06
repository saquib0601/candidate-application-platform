// This action type constant represents the action type for setting jobs in the Redux store
export const SET_JOBS = 'SET_JOBS';

// This action creator function creates an action to set jobs in the Redux store
export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs, // The payload contains the jobs data to be set in the store
});