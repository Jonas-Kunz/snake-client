//////conn funky///
const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function (name) {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    conn.write(`Name: ${name}`)
  });

  

  conn.on("data", (data) => {
    console.log("Server msg: ", data);
  });

  return conn;
};

module.exports = {connect}