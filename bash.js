process.stdout.write('prompt > '); // stdout = Standard Output;
// Prints "prompt>""

process.stdin.on('data', (data) => { // stdin = Standard Input;
  const cmd = data.toString().trim() // Whatever we're typing in is named the variable "cmd" = data (typing in).toString(turns to string).trim(trims off white space)
  if (cmd == "pwd") {
    const cmd = `${process.cwd()}`;
    process.stdout.write(cmd); // Outputs what we typed
    process.stdout.write('\nprompt > '); // Asks for new prompt
  } else {
    process.stdout.write('You typed: ' + cmd); // Outputs what we typed
    process.stdout.write('\nprompt > '); // Asks for new prompt
  }

});
