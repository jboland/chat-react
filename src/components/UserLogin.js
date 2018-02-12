import React, { Component } from 'react';

class UserLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }

    this.handleLogin = this.handleLogin.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(evt) {
    this.setState({
      user: evt.target.value
    });
  }

  handleLogin(evt) {
    evt.preventDefault();
    console.log(this.state.user);
    this.props.loginUser(this.state.user);
  }

  componentDidMount() {
    this.loginInput.focus();
  }

  render() {
    return (
      <form className="user-login" onSubmit={this.handleLogin}>
        Please login
        <input 
          ref={(input) => this.loginInput = input}
          type="text" 
          id="user" 
          value={this.state.user} 
          onChange={evt => this.updateUser(evt)}
        />
        <button>login</button>
      </form>
    );
  }
}

export default UserLogin;