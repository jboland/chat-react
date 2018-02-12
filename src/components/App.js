import React, { Component } from 'react';
import MessageInput from './MessageInput';
import MessageList from './MessageList';
import UserLogin from './UserLogin';

import firebase from '../firebase.js';

import '../styles/App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      user: null
    }

    this.sendMessage = this.sendMessage.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  sendMessage(msg) {
    console.log('in messag sender in app', msg);
    const currentMsgs = this.state.messages;
    const newMsgs = currentMsgs.concat(msg);

    const messagesRef = firebase.database().ref('messages');
    messagesRef.push(msg);

    this.setState({
      messages: newMsgs
    })
  }

  loginUser(user) {
    console.log('logging in user', user);
    this.setState({
      user: user
    });
  }

  componentDidMount() {
    const messagesRef = firebase.database().ref('messages');
    messagesRef.on('value', (snapshot) => {
      console.log('getting an update', snapshot.val());
      // this.setState({
        // messages: snapshot.val()
      // })
    });
  }

  componentDidUpdate() {
    console.log('component updated', this.state);
  }

  render() {
    const isLoggedIn = this.state.user;

    return (
      <div className="App">
        { isLoggedIn ? (
            <div>
              <MessageList messages={this.state.messages} />
              <MessageInput sendMessage={this.sendMessage} user={this.state.user} />
            </div>
          ) : (
            <UserLogin loginUser={this.loginUser} />
          )
        }
      </div>
    );
  }
}

export default App;
