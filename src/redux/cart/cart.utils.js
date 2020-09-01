export const addItemToCar = (cartItems, cartItemsToAdd) => {
    // Check if new item is in cartItems array
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemsToAdd.id);

    // If item exists in cartItem array, incriment the
    // quantity for that item or just pass item in new array
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemsToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    // This runs when new item is added to cart
    return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};
