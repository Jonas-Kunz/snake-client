const { connect } = require("./client");
const { setupInput } = require("./input");
const name = process.argv.slice(2,3);

console.log("Connecting ...");


setupInput(connect(name));

