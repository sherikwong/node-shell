const fs = require('fs'); // fs is a built-in module that needs to be required b/c it's not a langauge keyword.

module.exports = fs.readdir('./', 'utf8', (err, files) => {
  if (err) {
    throw err;
  } else {
    process.stdout.write(files.join('\n'));
    process.stdout.write('prompt > ');
  }
})
