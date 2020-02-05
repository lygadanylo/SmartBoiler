const net = require("net");

const client = new net.Socket();

client.connect(79, "192.168.0.108", () => {
  console.log("connection craeted client");
  setInterval(() => {
    let randoNumber = Math.floor(Math.random() * Math.floor(100));
    client.write(randoNumber.toString());
  }, 15000);
});
