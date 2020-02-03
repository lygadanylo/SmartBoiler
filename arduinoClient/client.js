const net = require("net");

const client = new net.Socket();

client.connect(79, "192.168.0.108", () => {
  console.log("connection craeted client");
  setInterval(() => {
    client.write("12");
  }, 3000);
});
