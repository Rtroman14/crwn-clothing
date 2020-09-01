import React from "react";

import CustomButton from "../custom-button/custom-button.component.jsx";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

// Destructure "cart" from state (root-reducer.js) and "cartItems" from "cart"
const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems,
});

// Connecting the state to our cart-item from collection-item
export default connect(mapStateToProps)(CartDropdown);
