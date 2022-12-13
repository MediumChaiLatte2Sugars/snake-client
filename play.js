const { connect } = require("./client");

console.log("Connecting ...");
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // Input listener
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  // Exit sequence handler (Ctrl+c)
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput();

