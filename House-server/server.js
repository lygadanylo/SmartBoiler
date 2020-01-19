const server = require("express")();
const bodyParser = require("body-parser");

const PORT = 3000;
const HOST = "192.168.0.108";

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser());

server.get("/", (req, res) => {
  console.log("in");
  return res.status(200).json({ temp: "32 dig" });
});

server.listen(PORT, HOST, () => {
  console.log(`Server working on PORT - ${PORT}, HOST - ${HOST}`);
});
