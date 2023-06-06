const http = require('http');
const fs = require('fs');

const PORT = 3108;
const HTML_FILE_PATH = './www/index.html';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(HTML_FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Wystąpił błąd serwera');
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

server.listen(PORT, () => {
  console.log(`Serwer uruchomiony : ${PORT}`);
});