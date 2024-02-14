// Create web server
// 1. Create a web server
// 2. Add a request listener
// 3. Send a response
// 4. Listen on a port
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const comments = require('./comments.json');

const server = http.createServer((req, res) => {
  // 2. Add a request listener
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  if (pathname === '/') {
    // 3. Send a response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const indexHtml = fs.readFileSync(
      path.resolve(__dirname, 'index.html'),
      'utf8'
    );
    res.end(indexHtml);
  } else if (pathname === '/comments') {
    if (req.method === 'GET') {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });
      res.end