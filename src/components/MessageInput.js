import React, { Component } from 'react';

class MessageInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      message: '',
      messageId: 0
    }

    this.updateMessage = this.updateMessage.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
  }

  updateMessage(evt) {
    this.setState({
      message: evt.target.value
    });
  }

  handleSendMessage(evt) {
    evt.preventDefault();

    this.props.sendMessage({
      user: this.props.user,
      message: this.state.message,
      id: this.props.user + (new Date()).getTime()
    });

    this.setState({
      message: '',
      messageId: this.state.messageId + 1
    });
  }

  componentDidMount() {
    this.messageInput.focus();
  }

  render() {
    return (
      <form className="message-input" onSubmit={this.handleSendMessage}>
        <input 
          ref={(input) => this.messageInput = input } 
          type="text" 
          id="message" 
          value={this.state.message} 
          onChange={evt => this.updateMessage(evt)}
        />
        <button>SEND</button>
      </form>
    );
  }
}

export default MessageInput;