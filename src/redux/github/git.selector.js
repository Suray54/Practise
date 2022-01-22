import { createSelector } from "reselect";

const selectGit = (state) => state.git;

export const getUserDetail = createSelector([selectGit], (git) => git.user);

export const getUserFailure = createSelector([selectGit], (git) => git.error);
