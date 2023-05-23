let easymidi = require("easymidi");
let output = new easymidi.Output("output", true);

let sendNote1 = (noteValue) => {
  output.send("noteon", noteValue);

  setTimeout(() => {
    output.send("noteoff", noteValue);
  }, 200);
};
setInterval(() => {
  let noteValue = {
    note: [55, 62, 79, 62, 66, 62, 69, 40][Math.floor(Math.random() * 3)],
    velocity: 127,
    channel: 2,
  };
  sendNote1(noteValue);
}, 200);

let sendNote2 = (noteValue) => {
  output.send("noteon", noteValue);

  setTimeout(() => {
    output.send("noteoff", noteValue);
  }, 200);
};
setInterval(() => {
  let noteValue = {
    note: [11 * 8, 11 * 8 + 4, 11 * 8 + 7][Math.floor(Math.random() * 3)],
    velocity: 127,
    channel: 3,
  };
  sendNote2(noteValue);
}, 5000);
