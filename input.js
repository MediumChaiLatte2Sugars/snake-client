let connection;
const { MESSAGES, MOVE_SET } = require("./constants");

const setupInput = function(conn) {
  connection = conn;
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

  // Looks up appropriate key-binding for move, sends to server
  if (Object.keys(MOVE_SET).includes(key)) {
    connection.write(MOVE_SET[key]);
  }

  // Looks up appropriate key-binding for message, sends to server
  if (Object.keys(MESSAGES).includes(key)) {
    connection.write(MESSAGES[key]);
  }

};

module.exports = { setupInput };