const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const WebSocketServer = require('websocket').server;
const os = require('os');

const HOST = os.networkInterfaces().Ethernet[1].address;
const APP_PORT = 3000;
const WEB_PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());

app.get('/', (req, res) => {
	console.log('in');
	return res.status(200).json({ temp: '32 dig' });
});

app.listen(APP_PORT, HOST, () => {
	console.log(`Server working on PORT - ${APP_PORT}, HOST - ${HOST}`);
});

// Web Socket initialization
const server1 = http.createServer((request, response) => {});

server1.listen(WEB_PORT, () => {
	console.log(`Web Socket server listening on WEB PORT - ${WEB_PORT}`);
});

const wsServer = new WebSocketServer({httpServer:server1});