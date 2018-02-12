import React from 'react';
import Message from './Message';

const MessageList = (props) => {
  console.log('messages are', props.messages);
  return(
    <ul>
      {
        props.messages.map(msg => <Message key={msg.id} message={msg.message} user={msg.user} />)
      }
    </ul>
  )
}

export default MessageList;