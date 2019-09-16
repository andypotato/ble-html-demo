const express = require('express');
const path = require('path');
const http = require('http');

const host = 'localhost';
const port = 8080;

// setup express app
let app = express();
app.set('port', port);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const viewsDir = path.join(__dirname, 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => res.sendFile(path.join(viewsDir, 'index.html')))
app.get('/simple', (req, res) => res.sendFile(path.join(viewsDir, 'simple.html')))
app.get('/motion', (req, res) => res.sendFile(path.join(viewsDir, 'motion.html')))

// start HTTP server
const httpServer = http.createServer(app);
httpServer.listen(port, host);
console.log(`Server started at ${host}:${port}`);
