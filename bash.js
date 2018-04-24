process.stdout.write('prompt > '); // stdout = Standard Output;
// Prints "prompt>""

process.stdin.on('data', (data) => { // stdin = Standard Input;
  const cmd = data.toString().trim() // Whatever we're typing in is named the variable "cmd" = data (typing in).toString(turns to string).trim(trims off white space)


  const pwd = require('./pwd');

  if (cmd === "pwd") {
    pwd(cmd);
  } else if (cmd === "ls") {
    const ls = require('./ls');
  } else {
    pwd(cmd);
  }

});

