const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
// const WebSocketServer = require("websocket").server;
const webSocket = require("ws");
const uuid = require("uuid");
const os = require("os");
const Emitter = require("events");

const net = require("net");

const HOST = os.networkInterfaces().Ethernet[1].address;
const APP_PORT = 80;
const WEB_PORT = 81;
const ARDUINOPORT = 79;

const emitter = new Emitter();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser());

app.get("/", (req, res) => {
  const SID = uuid.v4();
  return res.status(200).json({ SID: SID });
});

app.listen(APP_PORT, HOST, () => {
  console.log(`Server listen on port - ${APP_PORT} and host - ${HOST}`);
});

const server = http.createServer((requset, response) => {});

server.listen(WEB_PORT, () => {
  console.log(`Socket server working on PORT - ${WEB_PORT}`);
});

const wsServer = new webSocket.Server({ server });

const convertData = data => {
  return String.fromCharCode.apply(String, data);
};

const tcpServer = net.createServer(socket => {
  socket.on("data", data => {
    let result = convertData(data);
    emitter.emit("arduion_data", result);
  });
});

tcpServer.listen(ARDUINOPORT);

wsServer.on("connection", socket => {
  console.log("connection created");
  emitter.on("arduion_data", data => {
    socket.send(data);
  });
  socket.on("message", data => {
    console.log(data);
  });
  socket.on("error", error => {
    console.log(error);
  });
  socket.on("close", () => {
    console.log("Connection closed");
  });
});
