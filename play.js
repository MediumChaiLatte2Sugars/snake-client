const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// Nested to pass returned connection object to input handler
setupInput(connect());

