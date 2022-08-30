
const strokes =  ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
//strokes.split(',').splice(3,1)

let delay = 50;
//let count = 0;
for (const char of strokes) {
  const display = '\r' + char + '   ';
  setTimeout(() => process.stdout.write(display), delay);

  delay += 250;

}
// console.log(strokes[3]);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\  '); 
// }, 700)
// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r|   '); 
// }, 900);;
