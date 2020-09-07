import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom"; // gives us access to history url param

import CustomButton from "../custom-button/custom-button.component.jsx";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.length ? (
                cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
            ) : (
                <span className="empty-message">Your cart is empty</span>
            )}
        </div>
        <CustomButton
            onClick={() => {
                history.push("/checkout");
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CustomButton>
    </div>
);

// Destructure "cart" from state (root-reducer.js) and "cartItems" from "cart"
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

// Connecting the state to our cart-item from collection-item
export default withRouter(connect(mapStateToProps)(CartDropdown));
