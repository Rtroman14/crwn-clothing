import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        "pk_test_51HPeofKxERTqmDxwLXyL0frkyXK6xpSwBjojWWarWNYUVy28rmyoNGHO9PxRrJYrpRunUst9kTsvehmtdLGwTH2d00DjsdBUBp";

    // This token is sent to our backend to handle payment
    // For now, we just alert the user
    const onToken = (token) => {
        console.log(token);
        alert("Payment Successful!");
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
