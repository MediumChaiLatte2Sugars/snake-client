const IP = "localhost";
const PORT = 50541;
const NAME = "Name: KM";

// Move commands binded to WASD
const MOVE_SET = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right",
};

// Canned messages to display in game
const MESSAGES = {
  l: "Say: LOL",
  o: "Say: Wow!",
  y: "Say: Oof!",
  g: "Say: Hey!",
  G: "Say: Good game!",
};

module.exports = { IP, PORT, MOVE_SET, MESSAGES, NAME };