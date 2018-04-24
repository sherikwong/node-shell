module.exports = function(cmd) {
    if (cmd == "pwd") {
    const cmd = `${process.cwd()}`;
    process.stdout.write(cmd); // Outputs what we typed
    process.stdout.write('\nprompt > '); // Asks for new prompt
  } else {
    process.stdout.write('You typed: ' + cmd); // Outputs what we typed
    process.stdout.write('\nprompt > '); // Asks for new prompt
  }
}