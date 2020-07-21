import React from "react";
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { render } from "@testing-library/react";
import { updateUser, apiRequest } from "./actions/user-actions";

class App extends Component {
  // console.log(props);
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 2000);
  }

  onUpdateUser(event) {
    const inputValue = event.target.value;
    this.props.onUpdateUser(inputValue);
  }

  render() {
    // console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input onChange={this.onUpdateUser} />
          {this.props.user}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateProps = (state, props) => {
  // console.log(props)
  return {
    products: state.products,
    user: state.user,
    userPlusProps: `${state.user} ${props.aRandomProps}`,
  };
};

const mapActionsToProps = {
  // console.log(props);

  onUpdateUser: updateUser,
  onApiRequest: apiRequest,
};

// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);

//   return {};
// };

export default connect(mapStateProps, mapActionsToProps)(App);
