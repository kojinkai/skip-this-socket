const url = 'ws://localhost:3001'
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('hey');
}

connection.onmessage = ({ data }) => {
  console.log('data: ', data);
}


export default connection;