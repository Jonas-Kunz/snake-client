

const {connect} = require("./client");
// establishes a connection with the game sever

const setupInput = function (callback) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
}
setupInput(handleUserInput);
console.log("Connecting ...");
connect();
