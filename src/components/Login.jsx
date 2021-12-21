import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(){
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout(){
    this.setState({isLoggedIn: false})
  };

  render() {
    return (
      <div>
        <h2>You are {this.state.isLoggedIn? 'currently' : 'not'} Logged in</h2>
        <button onClick={this.state.isLoggedIn ? this.handleLogout : this.handleLogin}>
          <b>{this.state.isLoggedIn ? 'Logout' : 'Login'}</b>
        </button>
      </div>
    )
  }
}
