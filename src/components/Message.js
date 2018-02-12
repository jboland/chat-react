import React from 'react';

const Message = ({message, user}) => {
  return(
    <li className='message'>
      <div className='message__user'>{user}</div>
      <div className='message__text'>{message}</div>
    </li>
  )
}

export default Message;