const net = require('net');

async function fetchIP() {
  const res = await fetch('https://api.ipify.org');
  console.log(await res.text());
}
fetchIP();

const server = net.createServer((socket) => {
  socket.on('data', (data) => {
    console.log(data);
    console.log(data.toString());
  });
});

server.listen(25565, '0.0.0.0', () => {
  console.log(`Server running`);
});
