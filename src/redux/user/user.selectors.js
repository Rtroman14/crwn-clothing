import { createSelector } from "reselect";

const selectUser = (state) => state.user;

// "user" = "[selectUser]"
export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);
