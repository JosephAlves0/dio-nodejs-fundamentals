import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.blue.bgCyan.bold("Hello my package! 🛒"));

console.log(logSymbols.success, chalk.green.italic("servidor iniciado com sucesso!"));
console.log(logSymbols.error, chalk.red.italic("servidor iniciado com sucesso!"));