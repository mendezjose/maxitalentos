import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

// Slice
const slice = createSlice({
  name: "jobs",
  initialState: {
    list: [],
  },
  reducers: {
    jobsRecived: (jobs, action) => {
      jobs.list = action.payload;
    },
    jobSaved: (jobs, action) => {
      jobs.list.push(action.payload);
    },
  },
});

const { jobsRecived, jobSaved } = slice.actions;

//  Actions
export const loadJobs = () =>
  apiCallBegan({
    url: "/jobs",
    onSuccess: jobsRecived.type,
  });

export const saveJob = (job) =>
  apiCallBegan({
    url: "/jobs",
    method: "post",
    data: job,
    onSuccess: jobSaved.type,
  });

export default slice.reducer;
