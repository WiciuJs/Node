const http = require('http');
const fs = require('fs');
const socketIO = require('socket.io');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./www/index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Błąd serwera');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Strona nie znaleziona');
  }
});

server.listen(3108, () => {
});

const io = socketIO(server);

io.on('connect', (socket) => {

  socket.on('message', (msg) => {
    let response;

    if (msg === 'name') {
      response = 'Hansbot';
    } else if (msg === 'data') {
      response = new Date().toLocaleDateString();
    } else if (msg === 'time') {
      response = new Date().toLocaleTimeString();
    } else {
      response = 'Nieznane polecenie';
    }

    socket.emit('message', response);
  });
});