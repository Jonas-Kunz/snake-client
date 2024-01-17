const { KEY, MSG, CMD } = require("./constants");

let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  //console.log(key)
  
  if (key === "\u0003") {
    process.exit();
  }
  if (key ===  "w") {
    connection.write(CMD["w"]);
  }
  if (key === "a") {
    connection.write(CMD["a"]);
  }
  if (key === "s") {
    connection.write(CMD["s"]);
  }
  if (key === "d") {
    connection.write(CMD["d"]);
  }
  //if (key === KEY[5] || Key === KEY[6])
  
  
    
  
};

setupInput(handleUserInput);

module.exports = {setupInput}