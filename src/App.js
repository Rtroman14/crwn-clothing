import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-out/sign-in-and-sign-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;
        // lesson 87 - 94
        // Open auth subscription when component mounts and close
        // subscription when component unmounts to prevent memory leaks
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                // userRef is returned from createUserProfileDocument in firebase.utils.js
                // userRef contains data cooresponding to the logged in user
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot((snapshot) => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data(),
                    });
                });
            } else {
                setCurrentUser(userAuth);
                // Code was temporarily there to programatically add shop.data.js to firestore
                // addCollectionAndDocument(
                //     "collections",
                //     // only want "title" and "items" from shop.data.js to go in firestore
                //     collectionsArray.map(({ title, items }) => ({ title, items }))
                // );
            }
        });
    }

    componentWillUnmount() {
        // close auth subscription once component unmounts
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route exact path="/checkout" component={CheckoutPage} />
                    <Route
                        exact
                        path="/signin"
                        render={() =>
                            this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignOutPage />
                        }
                    />
                </Switch>
            </div>
        );
    }
}

// destructure "user" from "state"
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    // Code was temporarily there to programatically add shop.data.js to firestore
    // collectionsArray: selectCollectionsForPreview,
});

const mapDispatchToProps = (dispatch) => ({
    // "dispatch" notifies redux that whatever action is
    // being passed as an argument will be shipped to a reducer
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// connect(get props from state, ship new state to reducers)
export default connect(mapStateToProps, mapDispatchToProps)(App);
