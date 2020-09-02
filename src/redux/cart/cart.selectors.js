import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const selectCartItems = createSelector([cartSelector], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
    cartItems.reduce((previousValue, cartItem) => previousValue + cartItem.quantity, 0)
);

// This memoizes code which helps prevent components from rerendering when state doesn't change
// Refer to lesson 122
