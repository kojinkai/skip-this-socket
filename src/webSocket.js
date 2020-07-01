const socketUrl = `ws://${process.env.REACT_APP_NETWORK_IP}:3001`;
const connection = new WebSocket(socketUrl);

connection.onmessage = ({ data }) => {
	console.log('data: ', data);
};

export default connection;
