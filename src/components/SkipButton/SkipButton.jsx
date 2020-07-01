import React from 'react';
import connection from '../../webSocket';
import skipIcon from '../../images/skip_icon.svg';
function SkipButton() {
	const sendSkipMessage = () => connection.send('skip');

	return (
		<button onClick={sendSkipMessage}>
			<img src={skipIcon} alt="skip this" />
		</button>
	);
}

export default SkipButton;
