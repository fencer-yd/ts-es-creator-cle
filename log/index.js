const chalk = require("chalk");

const success = chalk.green;
const warn = chalk.yellow;
const error = chalk.red;
const info = chalk.blue;

module.exports = function (str, type) {
  switch (type) {
    case "ok":
      console.log(success(`😍${str}`));
      break;
    case "warn":
      console.log(warn(`😳${str}`));
      break;
    case "err":
      console.log(error(`🤬${str}`));
      break;
    default:
      console.log(info(`👻${str}`));
      break;
  }
};
