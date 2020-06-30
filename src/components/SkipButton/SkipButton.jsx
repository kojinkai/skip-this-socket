import React from 'react';
import connection from '../../webSocket';

function SkipButton() {
  const sendSkipMessage = () => connection.send('skip')
  
  return (
    <button onClick={sendSkipMessage}>skip</button>
  );
}

export default SkipButton;
