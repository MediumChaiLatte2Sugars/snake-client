let connection;

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
 
  switch (key){
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    case 'l':
      connection.write("Say: LOL");
      break;
    case 'g':
      connection.write("Say: Hey!");
      break;
    case 'G':
      connection.write("Say: Good game!");
      break;
    case 'o':
      connection.write("Say: Wow!");
      break;
    case 'y':
      connection.write("Say: Oof!");
      break;
    case '\u0003': // Exit sequence (Ctrl+c)
      process.exit();
  }
};

module.exports = { setupInput }