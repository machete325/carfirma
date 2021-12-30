const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log('String', data.toString());
    console.log('JSON', data.toJSON());
    socket.write('00000001');
  });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT);

console.log(`Server started on port: ${PORT}`);
