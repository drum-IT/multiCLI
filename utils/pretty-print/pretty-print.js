const colors = require('./dictionary.pretty-print');

/**
 * PrettyLog (WIP)
 * Offers a quick way for a developer to stylize `console.log()` statements.
 * 
 * Offers an unstylized option, as well as three categories of stylized `console.log()` statements:
 * - Log
 * - Warning
 * - Success
 * 
 * Note: Errors should be handled externally.
 */
module.exports = {
  /**
   * [unstyled]
   * Typical `console.log()`.
   */
  lame: (message) => {
    colorize(message);
  },
  /**
   * [styled]
   * Typical `console.log()`.
   */
  log: (message) => {
    colorize(message, colors.fgCyan);
  },
  /**
   * [styled]
   * A stronger `console.log()`.
   */
  logStrong: (message) => {
    colorize(message, colors.fgCyan, undefined, colors.reverse);
  },
  /**
   * [styled]
   * A brighter `console.log()`.
   */
  logBright: (message) => {
    colorize(message, colors.fgCyan, undefined, colors.bright);
  },
  /**
   * [styled]
   * A warning `console.log()`
   */
  warn: (message) => {
    colorize(message, colors.fgYellow, undefined, colors.underscore);
  },
  /**
   * [styled]
   * A stronger `console.log()`.
   */
  warnStrong: (message) => {
    colorize(message, colors.fgYellow, undefined, colors.reverse);
  },
  /**
   * [styled]
   * A brighter `console.log()`.
   */
  warnBright: (message) => {
    colorize(message, colors.fgYellow, undefined, colors.bright);
  },
  /**
   * [styled]
   * A success `console.log()`
   */
  success: (message) => {
    colorize(message, colors.fgGreen, undefined, colors.bright);
  },
  /**
   * [styled]
   * A stronger `console.log()`.
   */
  successStrong: (message) => {
    colorize(message, colors.fgGreen, undefined, colors.reverse);
  },
  /**
   * [styled]
   * A brighter `console.log()`.
   */
  successBright: (message) => {
    colorize(message, colors.fgWhite, colors.bgGreen);
  }
}


/**
 * Given a string, foreground color, background color, and/or effect, will return a colorized `console.log()`.
 * (Falls back to typical `console.log()` behaviour)
 * @param {string | number | obect } string - any value normally accepted by `console.log()`
 * @param {string} fg - ASCII color code, defined in dictionary.
 * @param {string} bg - ASCII color code, defined in dictionary.
 * @param {string} effect - ASCII color code, defined in dictionary.
 */
function colorize(string, fg, bg, effect) {
  return console.log(`${fg || ''}${bg || ''}${effect || ''}${string || ''}${colors.reset}`);
}

