'use strict';
let exit = require('exit');

/**
 * ExitLog class
 */
class ExitLog {
  constructor(options) {
    this.setOptions(options);
  }

  setOptions(options) {
    this.options = options;
  }

  /**
   * Default exception handler
   * - logs the exception to the standard output then exit the process
   */
  defaultExceptionHandler(err, exit) {
    console.log(err.message, err.stack);
    exit();
  }

  exit() {
    exit(1);
  }

  /**
   * Listen for unhandled exceptions and handle them before exiting the process
   */
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
