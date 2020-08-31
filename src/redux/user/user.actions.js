export const setCurrentUser = (user) => ({
    // type must match cooresponding reducer
    type: "SET_CURRENT_USER",
    // user payload will be "userAuth" || user snapshot object || null
    payload: user,
});
