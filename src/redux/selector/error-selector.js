import { createSelector } from "reselect";

const selectErrors = (state) => state.errors;

export const showErrors = createSelector(
  [selectErrors],
  (errors) => errors.errorlist
);
