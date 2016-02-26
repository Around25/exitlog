'use strict';
let exit = require('exit');

class ExitLog {
  constructor(options) {
    this.setOptions(options);
  }

  setOptions(options) {
    this.options = options;
  }

  defaultExceptionHandler(err, exit) {
    console.log(err.message, err.stack);
    exit();
  }

  exit() {
    exit(1);
  }

  start() {
    process.on('uncaughtException', (err) => {
      let handler = this.options.handler || this.defaultExceptionHandler;
      handler(err, this.exit);
    });
  }
}

module.exports = function (options) {
  let exitlog = new ExitLog(options || {});
  exitlog.start();
  return exitlog;
}
