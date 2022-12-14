const net = require("net");
const { IP, PORT, NAME } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    
    // Set name on successful connection
    conn.write(NAME);

  });

  conn.on("data", (data) => {
    console.log(data);
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn;
};

module.exports = { connect };