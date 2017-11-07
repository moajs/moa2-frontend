var fs = require('fs')

module.exports = function () {
  global.menu = require('./menu')()

  fs.watch(__dirname + '/src', (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
      console.log(`filename provided: ${filename}`);
    } else {
      console.log('filename not provided');
    }

    global.menu = require('./menu')()
    console.log("console.log(menu)")
    console.log(menu)
  });
}
