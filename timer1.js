const args = process.argv;

// Write a function that sets off a beep noise based on a timer
const timerBeep = () => {
  let time = 0;
  // args.sort();
  // console.log(args);
  for (i = 2; i <= args.length - 1; i++) {
    // convert CLI arguments to numbers
    args[i] = Number(args[i]);
    //if the CLI input was not a number, it will have converted to NaN - ignore it
    if (args[i] === 'NaN') {
      continue;
    } 
    //if the CLI input is a negative integer, ignore it
    if (args[i] <= 0) {
      continue;
    }
    time = i * 1000;
    setTimeout(() => {process.stdout.write('\x07')}, time);
  }
}
timerBeep();
