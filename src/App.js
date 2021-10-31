import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Shop from "./pages/Shop/Shop";
import Header from "./components/Header/Header";
import SignInAndSignUp from "./pages/SignIn-and-SignOut/SignInAndSignUp";
import { auth } from "./Firebase/firebase.utils";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/signin">
            <SignInAndSignUp />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
